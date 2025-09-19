// components/ui/iframe.tsx
import React from 'react';

interface IframeProps {
  src: string;
  title: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  allowFullScreen?: boolean;
  loading?: 'eager' | 'lazy';
}

export const Iframe: React.FC<IframeProps> = ({
  src,
  title,
  width = '100%',
  height = '300px',
  className = '',
  allowFullScreen = false,
  loading = 'lazy'
}) => {
  return (
    <iframe
      src={src}
      title={title}
      width={width}
      height={height}
      className={`border-0 ${className}`}
      allowFullScreen={allowFullScreen}
      loading={loading}
    />
  );
};