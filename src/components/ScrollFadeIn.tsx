import React, { useEffect, useRef, useState } from 'react';

interface ScrollFadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

const ScrollFadeIn: React.FC<ScrollFadeInProps> = ({
  children,
  delay = 0,
  duration = 200,
  distance = 30,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [headerAnimationComplete, setHeaderAnimationComplete] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Listen for header animation completion
  useEffect(() => {
    const checkHeaderComplete = () => {
      // Look for your existing AnimatedHeading component
      const headerElement =
        document.querySelector('.animated-heading') ||
        document.querySelector('[data-animated-heading]') ||
        document.querySelector('h1'); // fallback to first h1

      if (headerElement) {
        // Check if animation classes suggest completion
        const hasAnimatedClass =
          headerElement.classList.contains('animation-complete') ||
          headerElement.classList.contains('animate-in-complete');

        if (hasAnimatedClass) {
          setHeaderAnimationComplete(true);
          return;
        }
      }

      // Fallback: wait for estimated animation duration
      // Adjust this timing based on your custom AnimatedHeading animation
      setTimeout(() => {
        setHeaderAnimationComplete(true);
      }, 7000); // Increased to account for your custom animation timing
    };

    // Listen for custom event (in case you want to dispatch one later)
    const handleHeaderComplete = () => {
      setHeaderAnimationComplete(true);
    };

    window.addEventListener('header-animation-complete', handleHeaderComplete);

    // Check immediately and with progressive delays
    checkHeaderComplete();

    // Also check periodically until we detect completion
    const checkInterval = setInterval(() => {
      if (!headerAnimationComplete) {
        checkHeaderComplete();
      } else {
        clearInterval(checkInterval);
      }
    }, 500);

    return () => {
      window.removeEventListener('header-animation-complete', handleHeaderComplete);
      clearInterval(checkInterval);
    };
  }, [headerAnimationComplete]);

  useEffect(() => {
    if (!headerAnimationComplete) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, headerAnimationComplete]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? 0 : distance}px)`,
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollFadeIn;
