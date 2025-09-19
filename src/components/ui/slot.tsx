// components/ui/slot.tsx
import React from 'react';

interface SlotProps {
  children: React.ReactNode;
  className?: string;
  name?: string;
}

export const Slot: React.FC<SlotProps> = ({
  children,
  className = '',
  name
}) => {
  return (
    <slot name={name} className={className}>
      {children}
    </slot>
  );
};