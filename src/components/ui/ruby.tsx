// components/ui/ruby.tsx
import React from 'react';

interface RubyProps {
  children: React.ReactNode;
  className?: string;
}

export const Ruby: React.FC<RubyProps> = ({
  children,
  className = ''
}) => {
  return (
    <ruby className={className}>
      {children}
    </ruby>
  );
};

interface RtProps {
  children: React.ReactNode;
  className?: string;
}

export const Rt: React.FC<RtProps> = ({
  children,
  className = ''
}) => {
  return (
    <rt className={`text-xs ${className}`}>
      {children}
    </rt>
  );
};

interface RpProps {
  children: React.ReactNode;
  className?: string;
}

export const Rp: React.FC<RpProps> = ({
  children,
  className = ''
}) => {
  return (
    <rp className={className}>
      {children}
    </rp>
  );
};