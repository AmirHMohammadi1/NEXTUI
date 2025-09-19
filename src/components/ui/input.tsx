// components/ui/input.tsx
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  containerClass?: string;
  helperText?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className = '',
  containerClass = '',
  id,
  helperText,
  icon,
  ...props
}) => {
  const generatedId = React.useId();
  const inputId = id || generatedId;

  return (
    <div className={`flex flex-col space-y-1 ${containerClass}`}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <input
          id={inputId}
          className={`rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white ${className} ${
            error ? 'border-error focus:ring-error' : ''
          } ${icon ? 'pl-10' : ''}`}
          {...props}
        />
      </div>
      {error && <span className="text-sm text-error">{error}</span>}
      {helperText && !error && <span className="text-sm text-gray-500 dark:text-gray-400">{helperText}</span>}
    </div>
  );
};