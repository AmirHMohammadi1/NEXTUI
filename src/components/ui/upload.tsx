// components/ui/upload.tsx
'use client';

import React, { useRef, useState } from 'react';

interface UploadProps {
  onFileSelect: (files: File[]) => void;
  multiple?: boolean;
  accept?: string;
  maxSize?: number;
  className?: string;
  label?: string;
}

export const Upload: React.FC<UploadProps> = ({
  onFileSelect,
  multiple = false,
  accept,
  maxSize = 10, // in MB
  className = '',
  label = 'فایل را انتخاب کنید یا اینجا رها کنید'
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (files: FileList | null) => {
    if (!files) return;

    const validFiles: File[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (maxSize && file.size > maxSize * 1024 * 1024) {
        alert(`حجم فایل ${file.name} بیشتر از ${maxSize}MB است`);
        continue;
      }
      validFiles.push(file);
    }

    onFileSelect(validFiles);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileChange(e.dataTransfer.files);
  };

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
        isDragging
          ? 'border-primary bg-primary/10'
          : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
      } ${className}`}
      onClick={() => fileInputRef.current?.click()}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        ref={fileInputRef}
        type="file"
        multiple={multiple}
        accept={accept}
        onChange={(e) => handleFileChange(e.target.files)}
        className="hidden"
      />
      <svg
        className="mx-auto h-12 w-12 text-gray-400"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <path
          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="mt-4 flex text-sm text-gray-600 dark:text-gray-400">
        <span className="relative font-medium">{label}</span>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
        {accept && `فرمت‌های مجاز: ${accept}`} {maxSize && ` - حداکثر حجم: ${maxSize}MB`}
      </p>
    </div>
  );
};