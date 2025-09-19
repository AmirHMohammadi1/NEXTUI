// components/ui/kbd.tsx
import React from 'react';

interface KbdProps {
  children: React.ReactNode;
  className?: string;
}

export const Kbd: React.FC<KbdProps> = ({
  children,
  className = ''
}) => {
  return (
    <kbd className={`font-mono text-xs bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded px-1.5 py-0.5 ${className}`}>
      {children}
    </kbd>
  );
};