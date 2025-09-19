// components/ui/template.tsx
import React from 'react';

interface TemplateProps {
  children: React.ReactNode;
  className?: string;
}

export const Template: React.FC<TemplateProps> = ({
  children,
  className = ''
}) => {
  return (
    <template className={className}>
      {children}
    </template>
  );
};