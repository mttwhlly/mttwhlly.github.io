import React, { useState, useEffect } from 'react';

const AnimatedHeading = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentPhase, setCurrentPhase] = useState('typing'); // 'typing', 'complete'
  const [showCursor, setShowCursor] = useState(true);

  const firstPart = 'Design-oriented frontend engineer. ';
  const secondPart = 'Calm interfaces. ';
  const thirdPart = 'Clear systems.';

  useEffect(() => {
    let timeoutId;

    const startAnimation = () => {
      // Smooth typing effect for all three parts
      const fullText = firstPart + secondPart + thirdPart;
      let currentIndex = 0;

      const typeNextChar = () => {
        if (currentIndex < fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
          timeoutId = setTimeout(typeNextChar, 60 + Math.random() * 20); // Calm, smooth streaming
        } else {
          // Animation complete
          setCurrentPhase('complete');

          // Dispatch completion event for scroll animations
          setTimeout(() => {
            const event = new CustomEvent('header-animation-complete');
            window.dispatchEvent(event);
          }, 200); // Small delay to ensure the text is fully rendered
        }
      };

      typeNextChar();
    };

    // Start the animation after a brief delay
    timeoutId = setTimeout(startAnimation, 200);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="relative" data-animated-heading>
      <h1
        className={`mb-8 font-mono leading-tight md:text-6xl text-4xl md:tracking-tighter tracking-loose min-h-[1.2em] ${currentPhase === 'complete' ? 'animation-complete' : ''}`}
      >
        {displayText}
        {showCursor && (
          <span className="inline-block ml-2 mb-2 w-12 h-12 md:w-16 md:h-16 bg-[#d4fc52] rounded-full animate-pulse opacity-80 align-middle"></span>
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
