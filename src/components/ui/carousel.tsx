// components/ui/carousel.tsx
'use client';

import React, { useState, useEffect, Children, useCallback } from 'react';

interface CarouselProps {
  children: React.ReactNode;
  autoPlay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = false,
  interval = 5000,
  showArrows = true,
  showDots = true,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = Children.toArray(children);
  const itemsCount = items.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemsCount);
  }, [itemsCount]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + itemsCount) % itemsCount);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(nextSlide, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, nextSlide]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {item}
          </div>
        ))}
      </div>

      {showArrows && itemsCount > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 rounded-full p-2 shadow-md transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 rounded-full p-2 shadow-md transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {showDots && itemsCount > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};