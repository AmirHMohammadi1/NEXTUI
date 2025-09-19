// components/ui/stats.tsx
import React from 'react';

interface StatItem {
  number: string;
  label: string;
}

interface StatsProps {
  stats: StatItem[];
  className?: string;
}

export const Stats: React.FC<StatsProps> = ({
  stats,
  className = ''
}) => {
  return (
    <div className={`bg-gray-100 dark:bg-gray-800 py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};