// components/ui/time.tsx
import React from 'react';

interface TimeProps {
  dateTime: string;
  children: React.ReactNode;
  className?: string;
}

export const Time: React.FC<TimeProps> = ({
  dateTime,
  children,
  className = ''
}) => {
  return (
    <time dateTime={dateTime} className={className}>
      {children}
    </time>
  );
};