// components/ui/divider.tsx
import React from 'react';

interface DividerProps {
  text?: string;
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  text,
  className = ''
}) => {
  if (text) {
    return (
      <div className={`relative ${className}`}>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300 dark:border-gray-700" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white dark:bg-gray-900 text-gray-500">
            {text}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`border-t border-gray-300 dark:border-gray-700 ${className}`} />
  );
};