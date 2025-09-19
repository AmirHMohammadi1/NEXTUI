// components/ui/testimonial.tsx
import React from 'react';
import { Avatar } from './avatar';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
  className?: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  avatar,
  className = ''
}) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${className}`}>
      <p className="text-gray-600 dark:text-gray-400 italic mb-4">"{quote}"</p>
      <div className="flex items-center">
        <Avatar src={avatar} name={author} />
        <div className="ml-4">
          <p className="font-semibold text-gray-900 dark:text-white">{author}</p>
          <p className="text-gray-500 dark:text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
};