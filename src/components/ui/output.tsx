// components/ui/output.tsx
import React from 'react';

interface OutputProps {
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
}

export const Output: React.FC<OutputProps> = ({
  htmlFor,
  children,
  className = ''
}) => {
  return (
    <output
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-gray-700 dark:text-gray-300 ${className}`}
    >
      {children}
    </output>
  );
};