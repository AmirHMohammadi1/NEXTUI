// components/ui/var.tsx
import React from 'react';

interface VarProps {
  children: React.ReactNode;
  className?: string;
}

export const Var: React.FC<VarProps> = ({
  children,
  className = ''
}) => {
  return (
    <var className={`italic ${className}`}>
      {children}
    </var>
  );
};