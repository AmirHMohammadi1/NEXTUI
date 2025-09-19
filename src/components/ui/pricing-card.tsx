// components/ui/pricing-card.tsx
import React from 'react';
import { Button } from './button';

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: PricingFeature[];
  buttonText: string;
  popular?: boolean;
  className?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  features,
  buttonText,
  popular = false,
  className = ''
}) => {
  return (
    <div className={`relative bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${popular ? 'ring-2 ring-primary' : ''} ${className}`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-semibold rounded-bl-lg">
          پرطرفدار
        </div>
      )}
      
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {title}
      </h3>
      
      <div className="mb-4">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">{price}</span>
        <span className="text-gray-600 dark:text-gray-400">/{period}</span>
      </div>
      
      <ul className="mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            {feature.included ? (
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            )}
            <span className={feature.included ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 line-through'}>
              {feature.name}
            </span>
          </li>
        ))}
      </ul>
      
      <Button variant={popular ? 'primary' : 'outline'} className="w-full">
        {buttonText}
      </Button>
    </div>
  );
};