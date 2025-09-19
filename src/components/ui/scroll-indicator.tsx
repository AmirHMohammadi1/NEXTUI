// components/ui/scroll-indicator.tsx
'use client';

import React, { useState, useEffect } from 'react';

interface ScrollIndicatorProps {
  targetId?: string;
  className?: string;
  color?: string;
  height?: number;
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  targetId,
  className = '',
  color = 'primary',
  height = 3
}) => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      if (targetId) {
        const element = document.getElementById(targetId);
        if (element) {
          const windowHeight = window.innerHeight;
          const elementTop = element.getBoundingClientRect().top;
          const elementHeight = element.offsetHeight;
          const scrolled = window.scrollY;
          const elementPosition = scrolled + elementTop;
          const totalHeight = elementHeight + windowHeight;
          const progress = (scrolled - elementPosition + windowHeight) / totalHeight;
          setScrollPercentage(Math.max(0, Math.min(1, progress)) * 100);
        }
      } else {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        setScrollPercentage((scrolled / documentHeight) * 100);
      }
    };

    window.addEventListener('scroll', calculateScrollProgress);
    window.addEventListener('resize', calculateScrollProgress);
    
    calculateScrollProgress();

    return () => {
      window.removeEventListener('scroll', calculateScrollProgress);
      window.removeEventListener('resize', calculateScrollProgress);
    };
  }, [targetId]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 ${className}`}
      style={{
        height: `${height}px`,
        background: `linear-gradient(to right, var(--color-${color}) ${scrollPercentage}%, transparent 0%)`
      }}
    />
  );
};