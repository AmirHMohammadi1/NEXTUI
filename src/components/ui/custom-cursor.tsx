// components/ui/custom-cursor.tsx
'use client';

import React, { useEffect, useState } from 'react';

interface CustomCursorProps {
  type?: 'default' | 'pointer' | 'text' | 'hidden';
  className?: string;
  children?: (position: { x: number; y: number }) => React.ReactNode;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({
  type = 'default',
  className = '',
  children
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (type === 'hidden') return null;

  const cursorStyle: React.CSSProperties = {
    position: 'fixed',
    left: position.x,
    top: position.y,
    pointerEvents: 'none',
    zIndex: 9999,
    transform: 'translate(-50%, -50%)',
    opacity: isHidden ? 0 : 1,
    transition: 'opacity 0.3s ease'
  };

  return (
    <div style={cursorStyle} className={className}>
      {children ? children(position) : (
        <div className={`w-8 h-8 rounded-full border-2 ${
          isPointer ? 'bg-primary/20 border-primary' : 'bg-gray-500/20 border-gray-500'
        } transition-all duration-150`} />
      )}
    </div>
  );
};