// components/ui/accordion.tsx
'use client';

import React, { useState } from 'react';

interface AccordionProps {
  items: { id: string; title: React.ReactNode; content: React.ReactNode }[];
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className = ''
}) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems(prev =>
        prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
      );
    } else {
      setOpenItems(prev => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map(item => (
        <div key={item.id} className="border rounded-lg dark:border-gray-700">
          <button
            className="flex items-center justify-between w-full p-4 text-left font-medium"
            onClick={() => toggleItem(item.id)}
            aria-expanded={openItems.includes(item.id)}
          >
            {item.title}
            <svg
              className={`w-5 h-5 transform transition-transform ${
                openItems.includes(item.id) ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openItems.includes(item.id) && (
            <div className="p-4 border-t dark:border-gray-700">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};