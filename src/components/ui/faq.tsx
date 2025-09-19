// components/ui/faq.tsx
import React from 'react';
import { Accordion } from './accordion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  className?: string;
}

export const FAQ: React.FC<FAQProps> = ({
  items,
  className = ''
}) => {
  const accordionItems = items.map((item, index) => ({
    id: `faq-${index}`,
    title: item.question,
    content: item.answer
  }));

  return (
    <div className={className}>
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        سوالات متداول
      </h2>
      <Accordion items={accordionItems} />
    </div>
  );
};