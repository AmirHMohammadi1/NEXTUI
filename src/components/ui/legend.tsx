// components/ui/legend.tsx
import React from 'react';

interface LegendProps {
  children: React.ReactNode;
  className?: string;
}

export const Legend: React.FC<LegendProps> = ({
  children,
  className = ''
}) => {
  return (
    <legend className={`text-sm font-medium text-gray-700 dark:text-gray-300 ${className}`}>
      {children}
    </legend>
  );
};