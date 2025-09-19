// components/ui/details.tsx
import React, { useState } from 'react';

interface DetailsProps {
  summary: React.ReactNode;
  children: React.ReactNode;
  open?: boolean;
  className?: string;
  onToggle?: (isOpen: boolean) => void;
}

export const Details: React.FC<DetailsProps> = ({
  summary,
  children,
  open = false,
  className = '',
  onToggle
}) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle?.(newState);
  };

  return (
    <div className={`border rounded-lg overflow-hidden ${className}`}>
      <button
        className="w-full px-4 py-3 text-left font-medium bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        <div className="flex items-center justify-between">
          {summary}
          <svg
            className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 border-t dark:border-gray-700">
          {children}
        </div>
      )}
    </div>
  );
};