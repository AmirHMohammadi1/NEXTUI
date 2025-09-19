// components/ui/skip-link.tsx
import React from 'react';

interface SkipLinkProps {
  targetId: string;
  label?: string;
  className?: string;
}

export const SkipLink: React.FC<SkipLinkProps> = ({
  targetId,
  label = 'پرش به محتوای اصلی',
  className = ''
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.tabIndex = -1;
      target.focus();
      setTimeout(() => target.removeAttribute('tabindex'), 1000);
    }
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className={`sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-primary focus:font-bold focus:rounded focus:shadow-lg ${className}`}
    >
      {label}
    </a>
  );
};