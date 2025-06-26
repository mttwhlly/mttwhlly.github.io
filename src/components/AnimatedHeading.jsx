import React, { useState, useEffect } from 'react';

const AnimatedHeading = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentPhase, setCurrentPhase] = useState('typing'); // 'typing', 'scrambling', 'complete'
  const [showCursor, setShowCursor] = useState(true);

  const firstPart = 'Building calm, thoughtful interfaces ';
  const secondPart = 'in a noisy world ';
  const scrambleChars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`';

  useEffect(() => {
    let timeoutId;
    let intervalId;

    const startAnimation = () => {
      // Phase 1: Typing effect for first part
      let currentIndex = 0;

      const typeNextChar = () => {
        if (currentIndex < firstPart.length) {
          setDisplayText(firstPart.slice(0, currentIndex + 1));
          currentIndex++;
          timeoutId = setTimeout(typeNextChar, 100 + Math.random() * 40); // Variable typing speed
        } else {
          // Brief pause before transitioning to scramble
          timeoutId = setTimeout(() => {
            setCurrentPhase('scrambling');
            startScrambleEffect();
          }, 100);
        }
      };

      typeNextChar();
    };

    const startScrambleEffect = () => {
      const fullText = firstPart + secondPart;
      const startIndex = firstPart.length;
      let scrambleIndex = startIndex;
      let iterations = 0;
      const maxIterations = 1;

      intervalId = setInterval(() => {
        let scrambledText = firstPart;

        // Add scrambled characters for the second part
        for (let i = startIndex; i < fullText.length; i++) {
          if (i <= scrambleIndex && iterations < maxIterations) {
            // Show scrambled character
            scrambledText += scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          } else if (i <= scrambleIndex) {
            // Reveal actual character
            scrambledText += secondPart[i - startIndex];
          }
        }

        setDisplayText(scrambledText);

        iterations++;

        if (iterations >= maxIterations) {
          scrambleIndex++;
          iterations = 0;

          if (scrambleIndex >= fullText.length) {
            // Animation complete
            setDisplayText(fullText);
            setCurrentPhase('complete');

            // Dispatch completion event for scroll animations
            setTimeout(() => {
              const event = new CustomEvent('header-animation-complete');
              window.dispatchEvent(event);
            }, 200); // Small delay to ensure the text is fully rendered

            clearInterval(intervalId);
          }
        }
      }, 50);
    };

    // Start the animation after a brief delay
    timeoutId = setTimeout(startAnimation, 300);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="relative" data-animated-heading>
      <h1
        className={`mb-8 font-mono leading-tight md:text-6xl text-5xl md:tracking-tighter tracking-loose min-h-[1.2em] ${currentPhase === 'complete' ? 'animation-complete' : ''}`}
      >
        {displayText}
        {showCursor && (
          <span className="inline-block ml-2 mb-2 w-12 h-12 md:w-16 md:h-16 bg-orange-500 rounded-full animate-pulse opacity-80 align-middle"></span>
        )}
      </h1>

      <style>{`
        @keyframes gentle-pulse {
          0%,
          100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(0.8);
          }
        }

        .animate-pulse {
          animation: gentle-pulse 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedHeading;
