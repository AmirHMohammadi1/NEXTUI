// components/ui/tabs.tsx
'use client';

import React, { useState } from 'react';

interface TabsProps {
  tabs: { id: string; label: string; content: React.ReactNode }[];
  defaultTab?: string;
  className?: string;
  variant?: 'default' | 'pills' | 'underline';
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultTab,
  className = '',
  variant = 'default'
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const variants = {
    default: {
      tab: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300',
      active: 'border-primary text-primary dark:border-primary-light dark:text-primary-light',
      container: 'border-b border-gray-200 dark:border-gray-700',
    },
    pills: {
      tab: 'rounded-md text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800',
      active: 'bg-primary text-white dark:bg-primary-dark',
      container: 'space-x-2',
    },
    underline: {
      tab: 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300',
      active: 'border-primary text-primary dark:border-primary-light dark:text-primary-light border-b-2',
      container: 'border-b border-gray-200 dark:border-gray-700',
    },
  };

  return (
    <div className={className}>
      <div className={`flex ${variants[variant].container}`}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-4 text-sm font-medium whitespace-nowrap ${
              activeTab === tab.id
                ? variants[variant].active
                : variants[variant].tab
            } ${
              variant === 'pills' ? 'px-3 py-1.5 rounded-md' : 'border-b-2'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};