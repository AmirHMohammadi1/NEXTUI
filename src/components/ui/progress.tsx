// components/ui/progress.tsx
import React from 'react';

interface ProgressProps {
  value: number;
  max?: number;
  className?: string;
  showValue?: boolean;
  variant?: 'default' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  className = '',
  showValue = false,
  variant = 'default',
  size = 'md'
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  
  const variants = {
    default: 'bg-primary',
    success: 'bg-success',
    warning: 'bg-warning',
    error: 'bg-error',
  };
  
  const sizes = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-4',
  };

  return (
    <div className={`w-full ${className}`}>
      {showValue && (
        <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
          <span>Progress</span>
          <span>{percentage.toFixed(0)}%</span>
        </div>
      )}
      <div className={`bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700 ${sizes[size]}`}>
        <div
          className={`rounded-full transition-all duration-300 ${variants[variant]} ${sizes[size]}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};