// components/ui/picture.tsx
import React from 'react';

interface PictureProps {
  children: React.ReactNode;
  className?: string;
}

export const Picture: React.FC<PictureProps> = ({
  children,
  className = ''
}) => {
  return (
    <picture className={className}>
      {children}
    </picture>
  );
};