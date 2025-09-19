// components/ui/checkbox.tsx
import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  containerClass?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  error,
  className = '',
  containerClass = '',
  id,
  ...props
}) => {
  const generatedId = React.useId();
  const inputId = id || generatedId;

  return (
    <div className={`flex items-center space-x-2 ${containerClass}`}>
      <input
        id={inputId}
        type="checkbox"
        className={`rounded border-gray-300 text-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-600 ${className} ${
          error ? 'border-error' : ''
        }`}
        {...props}
      />
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      {error && <span className="text-sm text-error">{error}</span>}
    </div>
  );
};