import React, { useEffect, useRef, useState } from 'react';

interface MarqueeTextProps {
  children: React.ReactNode;
  className?: string;
}

const MarqueeText: React.FC<MarqueeTextProps> = ({ children, className = '' }) => {
  const [shouldScroll, setShouldScroll] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textEl = textRef.current;
    const containerEl = containerRef.current;
    if (!textEl || !containerEl) return;

    const measure = (): void => {
      const textWidth = textEl.scrollWidth;
      const containerWidth = containerEl.clientWidth;
      const overflow = textWidth > containerWidth;

      setShouldScroll(overflow);
      if (overflow) {
        containerEl.style.setProperty('--marquee-distance', `${textWidth - containerWidth}px`);
      }
    };

    measure();

    // Re-measure once webfonts finish loading — the initial measurement can undercount
    // scrollWidth if it runs before the custom font swaps in.
    document.fonts?.ready.then(measure);

    const observer = new ResizeObserver(measure);
    observer.observe(textEl);
    observer.observe(containerEl);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`overflow-hidden relative ${className}`}>
      <div
        ref={textRef}
        className={`whitespace-nowrap w-fit ${shouldScroll ? 'animate-marquee' : ''}`}
      >
        {children}
      </div>

      <style>{`
        @keyframes marquee {
          0%, 20% {
            transform: translateX(0);
          }
          40%, 60% {
            transform: translateX(calc(-1 * var(--marquee-distance, 0px)));
          }
          80%, 100% {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          animation: marquee 10s ease-in-out infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default MarqueeText;
