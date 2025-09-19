// components/ui/slider.tsx
'use client';

import React, { useState } from 'react';

interface SliderProps {
  min: number;
  max: number;
  value: number | [number, number];
  onChange: (value: number | [number, number]) => void;
  step?: number;
  className?: string;
  label?: string;
  showValue?: boolean;
  variant?: 'single' | 'range';
}

export const Slider: React.FC<SliderProps> = ({
  min,
  max,
  value,
  onChange,
  step = 1,
  className = '',
  label,
  showValue = true,
  variant = 'single'
}) => {
  const [internalValue, setInternalValue] = useState(value);

  const handleChange = (newValue: number | [number, number]) => {
    setInternalValue(newValue);
    onChange(newValue);
  };

  const percentage = (val: number) => ((val - min) / (max - min)) * 100;

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
          {label}
        </label>
      )}
      <div className="relative h-4">
        <div className="absolute h-1 bg-gray-300 dark:bg-gray-600 rounded-full w-full top-1/2 transform -translate-y-1/2"></div>
        <div
          className="absolute h-1 bg-primary rounded-full top-1/2 transform -translate-y-1/2"
          style={{
            left: `${variant === 'single' ? 0 : percentage((internalValue as [number, number])[0])}%`,
            width: `${variant === 'single' ? percentage(internalValue as number) : percentage((internalValue as [number, number])[1]) - percentage((internalValue as [number, number])[0])}%`
          }}
        ></div>
        {variant === 'single' ? (
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={internalValue as number}
            onChange={(e) => handleChange(Number(e.target.value))}
            className="absolute w-full h-4 opacity-0 cursor-pointer z-10"
          />
        ) : (
          <>
            <input
              type="range"
              min={min}
              max={max}
              step={step}
              value={(internalValue as [number, number])[0]}
              onChange={(e) => handleChange([Number(e.target.value), (internalValue as [number, number])[1]])}
              className="absolute w-full h-4 opacity-0 cursor-pointer z-10"
            />
            <input
              type="range"
              min={min}
              max={max}
              step={step}
              value={(internalValue as [number, number])[1]}
              onChange={(e) => handleChange([(internalValue as [number, number])[0], Number(e.target.value)])}
              className="absolute w-full h-4 opacity-0 cursor-pointer z-10"
            />
          </>
        )}
      </div>
      {showValue && (
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
          <span>{variant === 'single' ? internalValue : (internalValue as [number, number])[0]}</span>
          <span>{variant === 'range' && (internalValue as [number, number])[1]}</span>
        </div>
      )}
    </div>
  );
};