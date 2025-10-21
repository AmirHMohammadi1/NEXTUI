// components/ui/toaster.tsx
'use client';

import React from 'react';
import { useToast } from '../../hooks/use-toast';
import { Button } from './button';

export const Toaster: React.FC = () => {
  const { toasts, dismissToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`p-4 rounded-md shadow-lg border flex items-start justify-between max-w-sm ${
            toast.variant === 'success'
              ? 'bg-green-50 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800/30'
              : toast.variant === 'danger'
              ? 'bg-red-50 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800/30'
              : toast.variant === 'warning'
              ? 'bg-yellow-50 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-800/30'
              : 'bg-white text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700'
          }`}
        >
          <div className="flex-1 mr-2">
            {toast.title && (
              <h3 className="font-semibold mb-1">{toast.title}</h3>
            )}
            <p className="text-sm">{toast.description}</p>
            {toast.action && (
              <div className="mt-2">
                <Button
                  size="sm"
                   variant={toast.variant === 'default' ? 'outline' : toast.variant}
                  onClick={() => {
                    toast.action?.onClick();
                    dismissToast(toast.id);
                  }}
                >
                  {toast.action.label}
                </Button>
              </div>
            )}
          </div>
          <button
            onClick={() => dismissToast(toast.id)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            &times;
          </button>
        </div>
      ))}
    </div>
  );
};