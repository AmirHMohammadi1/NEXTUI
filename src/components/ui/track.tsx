// components/ui/track.tsx
import React from 'react';

interface TrackProps {
  kind: 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata';
  src: string;
  srcLang: string;
  label: string;
  default?: boolean;
}

export const Track: React.FC<TrackProps> = ({
  kind,
  src,
  srcLang,
  label,
  default: isDefault
}) => {
  return (
    <track
      kind={kind}
      src={src}
      srcLang={srcLang}
      label={label}
      default={isDefault}
    />
  );
};