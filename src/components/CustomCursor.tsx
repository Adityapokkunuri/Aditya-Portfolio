import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100, currentX: -100, currentY: -100 });

  useEffect(() => {
    // Only enable custom cursor on fine pointer devices (desktop/mouse)
    if (window.matchMedia('(pointer: fine)').matches) {
      setEnabled(true);
    }

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;

      // Magnetic effect on elements with data-magnetic or interactive tags
      const target = (e.target as HTMLElement)?.closest('button, a, [data-magnetic="true"], [role="button"]');
      if (target) {
        setIsHovered(true);
        const rect = target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Gentle magnetic pull toward element center (35% strength)
        const dx = (centerX - e.clientX) * 0.28;
        const dy = (centerY - e.clientY) * 0.28;
        posRef.current.x += dx;
        posRef.current.y += dy;
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Smooth animation loop for cursor
    let animationFrameId: number;
    const render = () => {
      const p = posRef.current;
      p.currentX += (p.x - p.currentX) * 0.18;
      p.currentY += (p.y - p.currentY) * 0.18;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${p.currentX}px, ${p.currentY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      id="custom-cursor"
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
      style={{ transform: 'translate3d(-100px, -100px, 0)' }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isHovered
            ? 'w-10 h-10 bg-[#B5502F]/15 border border-[#B5502F]/40 backdrop-blur-[1px]'
            : isPressed
            ? 'w-2 h-2 bg-[#B5502F] scale-90'
            : 'w-3 h-3 bg-[#1C1A17]/80'
        }`}
      />
    </div>
  );
};
