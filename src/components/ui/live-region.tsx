// components/ui/live-region.tsx
'use client';

import React, { useEffect, useState } from 'react';

interface LiveRegionProps {
  message: string;
  politeness?: 'assertive' | 'polite';
  className?: string;
}

export const LiveRegion: React.FC<LiveRegionProps> = ({
  message,
  politeness = 'polite',
  className = ''
}) => {
  const [currentMessage, setCurrentMessage] = useState('');

  useEffect(() => {
    if (message) {
      setCurrentMessage(message);
    }
  }, [message]);

  return (
    <div
      aria-live={politeness}
      aria-atomic="true"
      className={`sr-only ${className}`}
    >
      {currentMessage}
    </div>
  );
};