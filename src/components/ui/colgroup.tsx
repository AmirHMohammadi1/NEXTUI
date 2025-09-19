// components/ui/colgroup.tsx
import React from 'react';

interface ColGroupProps {
  children: React.ReactNode;
  className?: string;
}

export const ColGroup: React.FC<ColGroupProps> = ({
  children,
  className = ''
}) => {
  return (
    <colgroup className={className}>
      {children}
    </colgroup>
  );
};

interface ColProps {
  span?: number;
  width?: string;
  className?: string;
}

export const Col: React.FC<ColProps> = ({
  span,
  width,
  className = ''
}) => {
  return (
    <col
      span={span}
      width={width}
      className={className}
    />
  );
};