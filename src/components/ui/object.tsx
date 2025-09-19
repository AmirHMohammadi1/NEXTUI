// components/ui/object.tsx
import React from 'react';

interface ObjectProps {
  data: string;
  type: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  children?: React.ReactNode;
}

export const Object: React.FC<ObjectProps> = ({
  data,
  type,
  width = '100%',
  height = '300px',
  className = '',
  children
}) => {
  return (
    <object
      data={data}
      type={type}
      width={width}
      height={height}
      className={className}
    >
      {children}
    </object>
  );
};