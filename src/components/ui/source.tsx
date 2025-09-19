// components/ui/source.tsx
import React from 'react';

interface SourceProps {
  srcSet: string;
  type?: string;
  media?: string;
  sizes?: string;
}

export const Source: React.FC<SourceProps> = ({
  srcSet,
  type,
  media,
  sizes
}) => {
  return (
    <source
      srcSet={srcSet}
      type={type}
      media={media}
      sizes={sizes}
    />
  );
};