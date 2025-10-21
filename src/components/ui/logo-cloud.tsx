// components/ui/logo-cloud.tsx
import Image from 'next/image';
import React from 'react';

interface LogoCloudProps {
  title: string;
  logos: { src: string; alt: string }[];
  className?: string;
}

export const LogoCloud: React.FC<LogoCloudProps> = ({
  title,
  logos,
  className = ''
}) => {
  return (
    <div className={`py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold text-gray-600 dark:text-gray-400 mb-8">
          {title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-12 mx-auto opacity-60 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </div>
  );
};