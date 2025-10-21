// components/ui/hero.tsx
import React from 'react';
// import { Button } from './button';

interface HeroProps {
  title: string;
  subtitle: string;
  cta: React.ReactNode;
  secondaryCta?: React.ReactNode;
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  cta,
  secondaryCta,
  className = ''
}) => {
  return (
    <section className={`bg-gradient-to-r from-primary to-primary-dark text-white py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {cta}
            {secondaryCta && secondaryCta}
          </div>
        </div>
      </div>
    </section>
  );
};