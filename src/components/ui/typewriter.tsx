// components/ui/typewriter.tsx
'use client';

import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string | string[];
  speed?: number;
  delay?: number;
  loop?: boolean;
  className?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 100,
  delay = 1000,
  loop = false,
  className = ''
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const texts = Array.isArray(text) ? text : [text];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[textIndex];
      
      if (isDeleting) {
        if (currentText === '') {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
          setCurrentIndex(0);
        } else {
          setCurrentText(current.substring(0, currentText.length - 1));
        }
      } else {
        if (currentText === current) {
          if (loop) {
            setTimeout(() => setIsDeleting(true), delay);
          }
        } else {
          setCurrentText(current.substring(0, currentIndex + 1));
          setCurrentIndex((prev) => prev + 1);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, textIndex, texts, speed, delay, loop]);

  return (
    <span className={`${className}`}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};