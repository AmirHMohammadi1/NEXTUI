// components/ui/meter.tsx
import React from 'react';

interface MeterProps {
  value: number;
  min?: number;
  max?: number;
  low?: number;
  high?: number;
  // optimum?: number;
  className?: string;
  label?: string;
}

export const Meter: React.FC<MeterProps> = ({
  value,
  min = 0,
  max = 100,
  low = 25,
  high = 75,
  // optimum = 50,
  className = '',
  label
}) => {
  const percentage = ((value - min) / (max - min)) * 100;
  
  let color = 'bg-success';
  if (value < low) {
    color = 'bg-error';
  } else if (value > high) {
    color = 'bg-warning';
  }

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
          <span>{label}</span>
          <span>{value}/{max}</span>
        </div>
      )}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <div
          className={`h-full rounded-full ${color} transition-all duration-300`}
          style={{ width: `${percentage}%` }}
          role="meter"
          aria-valuenow={value}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuetext={`${value} out of ${max}`}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500 mt-1">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};