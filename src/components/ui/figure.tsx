// components/ui/figure.tsx
import React from 'react';

interface FigureProps {
  children: React.ReactNode;
  caption?: string;
  className?: string;
}

export const Figure: React.FC<FigureProps> = ({
  children,
  caption,
  className = ''
}) => {
  return (
    <figure className={className}>
      {children}
      {caption && (
        <figcaption className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};