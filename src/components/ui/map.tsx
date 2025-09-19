// components/ui/map.tsx
import React from 'react';

interface MapProps {
  name: string;
  children: React.ReactNode;
  className?: string;
}

export const Map: React.FC<MapProps> = ({
  name,
  children,
  className = ''
}) => {
  return (
    <map name={name} className={className}>
      {children}
    </map>
  );
};

interface AreaProps {
  shape: 'rect' | 'circle' | 'poly' | 'default';
  coords: string;
  href?: string;
  alt?: string;
  target?: string;
  rel?: string;
}

export const Area: React.FC<AreaProps> = ({
  shape,
  coords,
  href,
  alt,
  target,
  rel
}) => {
  return (
    <area
      shape={shape}
      coords={coords}
      href={href}
      alt={alt}
      target={target}
      rel={rel}
    />
  );
};