// components/ui/radio.tsx
import React from 'react';

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  containerClass?: string;
  options: { value: string; label: string }[];
  name: string;
}

export const RadioGroup: React.FC<RadioProps> = ({
  label,
  error,
  className = '',
  containerClass = '',
  options,
  name,
  ...props
}) => {
  return (
    <div className={`flex flex-col space-y-2 ${containerClass}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <div className="space-y-2">
        {options.map(option => (
          <div key={option.value} className="flex items-center space-x-2">
            <input
              id={`${name}-${option.value}`}
              type="radio"
              value={option.value}
              name={name}
              className={`rounded-full border-gray-300 text-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-600 ${className} ${
                error ? 'border-error' : ''
              }`}
              {...props}
            />
            <label htmlFor={`${name}-${option.value}`} className="text-sm text-gray-700 dark:text-gray-300">
              {option.label}
            </label>
          </div>
        ))}
      </div>
      {error && <span className="text-sm text-error">{error}</span>}
    </div>
  );
};