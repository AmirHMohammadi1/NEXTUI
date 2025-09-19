// components/ui/qr-code.tsx
import React from 'react';

interface QRCodeProps {
  value: string;
  size?: number;
  className?: string;
  logo?: string;
  logoSize?: number;
}

export const QRCode: React.FC<QRCodeProps> = ({
  value,
  size = 128,
  className = '',
  logo,
  logoSize = 40
}) => {
  // This is a simplified QR code component using CSS
  // For a real implementation, you might want to use a QR code library
  return (
    <div className={`relative ${className}`}>
      <div
        className="grid grid-cols-3 gap-1 bg-white p-2 rounded"
        style={{ width: size, height: size }}
      >
        {/* Simplified QR code pattern - this is just for demonstration */}
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className={`rounded-sm ${
              i % 4 === 0 ? 'bg-black' : 'bg-white border border-gray-200'
            }`}
          />
        ))}
      </div>
      
      {logo && (
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-1 rounded"
          style={{ width: logoSize, height: logoSize }}
        >
          <img
            src={logo}
            alt="QR Logo"
            className="w-full h-full object-contain"
          />
        </div>
      )}
      
      <div className="text-xs text-center mt-2 text-gray-500">
        Scan me!
      </div>
    </div>
  );
};