// components/ui/masonry.tsx
import React from 'react';

interface MasonryProps {
  children: React.ReactNode;
  columns?: number;
  gap?: number;
  className?: string;
}

export const Masonry: React.FC<MasonryProps> = ({
  children,
  columns = 3,
  gap = 4,
  className = ''
}) => {
  const columnWrapper: Record<number, React.ReactNode[]> = {};
  const items = React.Children.toArray(children);
  
  // Initialize columns
  for (let i = 0; i < columns; i++) {
    columnWrapper[i] = [];
  }
  
  // Split items into columns
  items.forEach((item, index) => {
    const columnIndex = index % columns;
    columnWrapper[columnIndex].push(item);
  });

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-${gap} ${className}`}
    >
      {Object.values(columnWrapper).map((column, index) => (
        <div key={index} className="flex flex-col gap-4">
          {column.map((item, itemIndex) => (
            <div key={itemIndex}>{item}</div>
          ))}
        </div>
      ))}
    </div>
  );
};