// components/ui/timeline.tsx
import React from 'react';

interface TimelineItem {
  title: string;
  description: string;
  date: string;
  icon?: React.ReactNode;
  color?: 'primary' | 'success' | 'warning' | 'error' | 'gray';
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ items, className = '' }) => {
  const colors = {
    primary: 'bg-primary text-white',
    success: 'bg-success text-white',
    warning: 'bg-warning text-white',
    error: 'bg-error text-white',
    gray: 'bg-gray-400 text-white',
  };

  return (
    <div className={`space-y-8 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                colors[item.color || 'primary']
              }`}
            >
              {item.icon || (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </div>
            {index !== items.length - 1 && (
              <div className="w-0.5 h-full bg-gray-300 dark:bg-gray-600 mt-2"></div>
            )}
          </div>
          <div className="flex-1 pb-8">
            <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">{item.description}</p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};