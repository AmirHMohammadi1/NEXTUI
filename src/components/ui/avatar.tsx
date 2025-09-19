// components/ui/avatar.tsx
import React from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  fallback?: string;
  shape?: 'circle' | 'square';
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  size = 'md',
  className = '',
  fallback,
  shape = 'circle'
}) => {
  const sizes = {
    xs: 'h-6 w-6',
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
  };

  const shapeClass = shape === 'circle' ? 'rounded-full' : 'rounded-md';

  const [imgError, setImgError] = React.useState(false);

  if (src && !imgError) {
    return (
      <img
        src={src}
        alt={alt}
        className={`object-cover ${sizes[size]} ${shapeClass} ${className}`}
        onError={() => setImgError(true)}
      />
    );
  }

  return (
    <div
      className={`bg-primary/20 text-primary flex items-center justify-center font-medium ${sizes[size]} ${shapeClass} ${className}`}
    >
      {fallback ? fallback.charAt(0).toUpperCase() : alt.charAt(0).toUpperCase()}
    </div>
  );
};