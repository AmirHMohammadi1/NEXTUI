// components/ui/image-gallery.tsx
'use client';

import Image from 'next/image';
import React, { useCallback, useState } from 'react';

interface ImageGalleryProps {
  images: string[];
  className?: string;
  showThumbnails?: boolean;
  autoPlay?: boolean;
  interval?: number;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  className = '',
  showThumbnails = true,
  autoPlay = false,
  interval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  React.useEffect(() => {
    if (autoPlay && images.length > 1) {
      const timer = setInterval(nextImage, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, images.length, nextImage]);

  if (images.length === 0) return null;

  return (
    <div className={`relative ${className}`}>
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className="w-full h-auto object-cover"
        />
        
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
        
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
      
      {showThumbnails && images.length > 1 && (
        <div className="mt-4 flex space-x-2 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-colors ${
                index === currentIndex ? 'border-primary' : 'border-transparent'
              }`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};