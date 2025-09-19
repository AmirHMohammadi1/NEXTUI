// components/ui/sub-sup.tsx
import React from 'react';

interface SubProps {
  children: React.ReactNode;
  className?: string;
}

export const Sub: React.FC<SubProps> = ({
  children,
  className = ''
}) => {
  return (
    <sub className={`text-xs ${className}`}>
      {children}
    </sub>
  );
};

interface SupProps {
  children: React.ReactNode;
  className?: string;
}

export const Sup: React.FC<SupProps> = ({
  children,
  className = ''
}) => {
  return (
    <sup className={`text-xs ${className}`}>
      {children}
    </sup>
  );
};