// components/ui/samp.tsx
import React from 'react';

interface SampProps {
  children: React.ReactNode;
  className?: string;
}

export const Samp: React.FC<SampProps> = ({
  children,
  className = ''
}) => {
  return (
    <samp className={`font-mono bg-gray-100 dark:bg-gray-800 p-1 rounded ${className}`}>
      {children}
    </samp>
  );
};