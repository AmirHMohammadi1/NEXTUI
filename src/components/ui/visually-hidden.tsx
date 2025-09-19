// components/ui/visually-hidden.tsx
import React from 'react';

interface VisuallyHiddenProps {
  children: React.ReactNode;
  className?: string;
}

export const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({
  children,
  className = ''
}) => {
  return (
    <span className={`sr-only ${className}`}>
      {children}
    </span>
  );
};