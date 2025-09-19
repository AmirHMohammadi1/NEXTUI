// components/ui/gradient-text.tsx
import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  from?: string;
  to?: string;
  className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  from = 'from-primary',
  to = 'to-primary-dark',
  className = ''
}) => {
  return (
    <span className={`bg-gradient-to-r ${from} ${to} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};