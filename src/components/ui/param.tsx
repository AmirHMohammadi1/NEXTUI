// components/ui/param.tsx
import React from 'react';

interface ParamProps {
  name: string;
  value: string;
}

export const Param: React.FC<ParamProps> = ({
  name,
  value
}) => {
  return <param name={name} value={value} />;
};