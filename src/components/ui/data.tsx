// components/ui/data.tsx
import React from 'react';

interface DataProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export const Data: React.FC<DataProps> = ({
  value,
  children,
  className = ''
}) => {
  return (
    <data value={value} className={className}>
      {children}
    </data>
  );
};