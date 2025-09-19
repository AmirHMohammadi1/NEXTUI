// components/ui/optgroup.tsx
import React from 'react';

interface OptGroupProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export const OptGroup: React.FC<OptGroupProps> = ({
  label,
  children,
  className = ''
}) => {
  return (
    <optgroup label={label} className={className}>
      {children}
    </optgroup>
  );
};