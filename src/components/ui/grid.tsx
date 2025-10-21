// components/ui/grid.tsx
import React from 'react';

interface GridProps {
  children: React.ReactNode;
  // cols?: 1 | 2 | 3 | 4 | 5 | 6;
  md?: 1 | 2 | 3 | 4 | 5 | 6;
  lg?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 4 | 6 | 8 | 12;
  className?: string;
}

export const Grid: React.FC<GridProps> = ({
  children,
  // cols = 1,
  md,
  lg,
  gap = 6,
  className = ''
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6'
  };

  const gridMd = md ? {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
    5: 'md:grid-cols-5',
    6: 'md:grid-cols-6'
  }[md] : '';

  const gridLg = lg ? {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
    5: 'lg:grid-cols-5',
    6: 'lg:grid-cols-6'
  }[lg] : '';

  const gridGap = {
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8',
    12: 'gap-12'
  }[gap];

  return (
    <div className={`grid ${gridCols} ${gridMd} ${gridLg} ${gridGap} ${className}`}>
      {children}
    </div>
  );
};