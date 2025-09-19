// components/ui/mark.tsx
import React from 'react';

interface MarkProps {
  children: React.ReactNode;
  className?: string;
}

export const Mark: React.FC<MarkProps> = ({
  children,
  className = ''
}) => {
  return (
    <mark className={`bg-yellow-200 dark:bg-yellow-800 ${className}`}>
      {children}
    </mark>
  );
};