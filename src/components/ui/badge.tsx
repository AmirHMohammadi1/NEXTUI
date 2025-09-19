// components/ui/badge.tsx
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  rounded?: 'full' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  rounded = 'full'
}) => {
  const baseClasses = 'inline-flex items-center font-medium';
  
  const variants = {
    default: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    primary: 'bg-primary/20 text-primary dark:bg-primary/30 dark:text-primary-light',
    secondary: 'bg-secondary/20 text-secondary dark:bg-secondary/30 dark:text-secondary-light',
    success: 'bg-success/20 text-success dark:bg-success/30 dark:text-success-light',
    warning: 'bg-warning/20 text-warning dark:bg-warning/30 dark:text-warning-light',
    error: 'bg-error/20 text-error dark:bg-error/30 dark:text-error-light',
    outline: 'border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300',
  };
  
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1 text-base',
  };

  const roundedClass = rounded === 'full' ? 'rounded-full' : 'rounded-md';

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${roundedClass} ${className}`;

  return <span className={classes}>{children}</span>;
};