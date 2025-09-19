// components/ui/loader.tsx
import React from 'react';

interface LoaderProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  variant?: 'spinner' | 'dots' | 'bars';
  color?: 'primary' | 'white' | 'gray';
}

export const Loader: React.FC<LoaderProps> = ({ 
  size = 'md', 
  className = '', 
  variant = 'spinner',
  color = 'primary'
}) => {
  const sizes = {
    xs: 'h-4 w-4',
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
  };

  const colors = {
    primary: 'text-primary',
    white: 'text-white',
    gray: 'text-gray-400',
  };

  if (variant === 'spinner') {
    return (
      <div className={`flex justify-center items-center ${className}`}>
        <div
          className={`animate-spin rounded-full border-b-2 ${colors[color]} ${sizes[size]}`}
        ></div>
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className={`flex justify-center items-center space-x-1 ${className}`}>
        <div className={`animate-bounce rounded-full ${colors[color]} ${sizes[size]}`} style={{ animationDelay: '0.1s' }}></div>
        <div className={`animate-bounce rounded-full ${colors[color]} ${sizes[size]}`} style={{ animationDelay: '0.2s' }}></div>
        <div className={`animate-bounce rounded-full ${colors[color]} ${sizes[size]}`} style={{ animationDelay: '0.3s' }}></div>
      </div>
    );
  }

  if (variant === 'bars') {
    return (
      <div className={`flex justify-center items-center space-x-1 ${className}`}>
        <div className={`animate-pulse h-4 w-1 ${colors[color]}`} style={{ animationDelay: '0.1s' }}></div>
        <div className={`animate-pulse h-4 w-1 ${colors[color]}`} style={{ animationDelay: '0.2s' }}></div>
        <div className={`animate-pulse h-4 w-1 ${colors[color]}`} style={{ animationDelay: '0.3s' }}></div>
      </div>
    );
  }

  return null;
};