// components/404.tsx
import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import Link from 'next/link';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6 text-center">
          <div className="text-6xl font-bold text-primary">404</div>
          <h1 className="text-2xl font-bold mt-4 mb-2 text-gray-900 dark:text-white">Page Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The page you are looking for doesn`t exist or has been moved.
          </p>
          <div className="space-y-3">
            <Button
              onClick={() => window.history.back()}
              variant="primary"
              className="w-full"
            >
              Go Back
            </Button>
            <Link href="/" passHref>
              <Button variant="outline" className="w-full">
                Go Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};