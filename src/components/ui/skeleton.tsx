// components/ui/skeleton.tsx
import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  animation?: 'pulse' | 'wave' | 'none';
  height?: number | string;
  width?: number | string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'text',
  animation = 'pulse',
  height,
  width
}) => {
  const baseClasses = 'bg-gray-300 dark:bg-gray-700 rounded';
  
  const variants = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-none',
  };
  
  const animations = {
    pulse: 'animate-pulse',
    wave: 'animate-wave',
    none: '',
  };

  const style: React.CSSProperties = {};
  if (height) style.height = height;
  if (width) style.width = width;

  return (
    <div
      className={`${baseClasses} ${variants[variant]} ${animations[animation]} ${className}`}
      style={style}
    />
  );
};