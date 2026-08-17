import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const dot = dotRef.current;
    if (!dot) return;

    const move = (e: MouseEvent) => {
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      dot.style.opacity = '1';
    };

    const hide = () => dot.style.opacity = '0';
    const show = () => dot.style.opacity = '1';

    window.addEventListener('mousemove', move);
    document.documentElement.addEventListener('mouseleave', hide);
    document.documentElement.addEventListener('mouseenter', show);

    return () => {
      window.removeEventListener('mousemove', move);
      document.documentElement.removeEventListener('mouseleave', hide);
      document.documentElement.removeEventListener('mouseenter', show);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 z-[9999] h-4 w-4 rounded-full bg-black/75 dark:bg-white/75 opacity-0 pointer-events-none"
      style={{ transition: 'opacity 0.2s ease' }}
    />
  );
}
