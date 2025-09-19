// components/ui/embed.tsx
import React from 'react';

interface EmbedProps {
  src: string;
  type: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

export const Embed: React.FC<EmbedProps> = ({
  src,
  type,
  width = '100%',
  height = '300px',
  className = ''
}) => {
  return (
    <embed
      src={src}
      type={type}
      width={width}
      height={height}
      className={className}
    />
  );
};