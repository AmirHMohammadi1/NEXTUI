// components/ui/bdi.tsx
import React from 'react';

interface BdiProps {
  children: React.ReactNode;
  className?: string;
}

export const Bdi: React.FC<BdiProps> = ({
  children,
  className = ''
}) => {
  return (
    <bdi className={className}>
      {children}
    </bdi>
  );
};