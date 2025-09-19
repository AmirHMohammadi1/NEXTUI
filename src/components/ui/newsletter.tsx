// components/ui/newsletter.tsx
import React, { useState } from 'react';
import { Button } from './button';
import { Input } from './input';

interface NewsletterProps {
  title: string;
  description: string;
  placeholder: string;
  buttonText: string;
  onSubmit: (email: string) => void;
  className?: string;
}

export const Newsletter: React.FC<NewsletterProps> = ({
  title,
  description,
  placeholder,
  buttonText,
  onSubmit,
  className = ''
}) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
    setEmail('');
  };

  return (
    <div className={`bg-gray-100 dark:bg-gray-800 rounded-lg p-8 ${className}`}>
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {description}
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder={placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" variant="primary">
              {buttonText}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};