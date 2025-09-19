// components/ui/textarea.tsx
import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  containerClass?: string;
  helperText?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  className = '',
  containerClass = '',
  id,
  helperText,
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
      <textarea
        id={inputId}
        className={`rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white ${className} ${
          error ? 'border-error focus:ring-error' : ''
        }`}
        {...props}
      />
      {error && <span className="text-sm text-error">{error}</span>}
      {helperText && !error && <span className="text-sm text-gray-500 dark:text-gray-400">{helperText}</span>}
    </div>
  );
};