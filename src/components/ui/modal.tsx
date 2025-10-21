// components/ui/modal.tsx
import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closeOnOverlayClick?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  closeOnOverlayClick = true
}) => {
  if (!isOpen) return null;

  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-full mx-4'
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  // Prevent background scrolling when modal is open
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={handleOverlayClick}
    >
      <div className={`bg-white dark:bg-gray-800 rounded-lg w-full ${sizes[size]} max-h-[90vh] overflow-auto`}>
        {(title || onClose !== undefined) && (
          <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
            {title && <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h2>}
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>
        )}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};