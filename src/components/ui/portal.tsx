// components/ui/portal.tsx
'use client';

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
  container?: Element | DocumentFragment;
  className?: string;
}

export const Portal: React.FC<PortalProps> = ({
  children,
  container,
  className = ''
}) => {
  const [portalContainer, setPortalContainer] = useState<Element | null>(null);

  useEffect(() => {
    const targetContainer = container || document.body;
    setPortalContainer(targetContainer as Element);
  }, [container]);

  if (!portalContainer) return null;

  return ReactDOM.createPortal(
    <div className={className}>{children}</div>,
    portalContainer
  );
};