import React, { useEffect, useRef, useState } from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: 'slow' | 'medium' | 'fast';
  pauseOnHover?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({
  children,
  className = '',
  speed = 'medium',
  pauseOnHover = true,
}) => {
  const [shouldScroll, setShouldScroll] = useState<boolean>(false);
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Speed settings in seconds
  const speedMap = {
    slow: 12,
    medium: 10,
    fast: 8,
  };

  // Check if text overflows and needs scrolling
  useEffect(() => {
    const checkOverflow = () => {
      if (textRef.current && containerRef.current) {
        const textWidth = textRef.current.scrollWidth;
        const containerWidth = containerRef.current.clientWidth;
        const needsScroll = textWidth > containerWidth;
        setShouldScroll(needsScroll);

        // Set CSS custom property for animation distance
        if (needsScroll) {
          const distance = textWidth - containerWidth;
          containerRef.current.style.setProperty('--marquee-distance', `${distance}px`);
          containerRef.current.style.setProperty('--marquee-duration', `${speedMap[speed]}s`);
        }
      }
    };

    checkOverflow();

    // Recheck on window resize
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [children, speed]);

  return (
    <div ref={containerRef} className={`overflow-hidden min-w-0 flex-1 relative ${className}`}>
      <div
        ref={textRef}
        className={`whitespace-nowrap ${shouldScroll ? 'animate-marquee' : ''}`}
        style={{
          animationDuration: shouldScroll ? `${speedMap[speed]}s` : undefined,
          animationPlayState: pauseOnHover ? undefined : 'running',
        }}
      >
        {children}
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          20% {
            transform: translateX(0);
          }
          40% {
            transform: translateX(calc(-1 * var(--marquee-distance, 0px)));
          }
          60% {
            transform: translateX(calc(-1 * var(--marquee-distance, 0px)));
          }
          80% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          animation: marquee var(--marquee-duration, 10s) ease-in-out infinite;
        }

        .animate-marquee:hover {
          animation-play-state: ${pauseOnHover ? 'paused' : 'running'};
        }
      `}</style>
    </div>
  );
};

export default Marquee;
