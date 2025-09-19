// components/ui/bdo.tsx
import React from 'react';

interface BdoProps {
  dir: 'ltr' | 'rtl';
  children: React.ReactNode;
  className?: string;
}

export const Bdo: React.FC<BdoProps> = ({
  dir,
  children,
  className = ''
}) => {
  return (
    <bdo dir={dir} className={className}>
      {children}
    </bdo>
  );
};