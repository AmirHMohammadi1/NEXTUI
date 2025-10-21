// components/ui/chat-bubble.tsx
import Image from 'next/image';
import React from 'react';

interface ChatBubbleProps {
  message: string;
  isOwn: boolean;
  time: string;
  sender?: string;
  showAvatar?: boolean;
  avatar?: string;
  status?: 'sent' | 'delivered' | 'read';
  className?: string;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({
  message,
  isOwn,
  time,
  sender,
  showAvatar = true,
  avatar,
  status,
  className = ''
}) => {
  return (
    <div className={`flex gap-2 ${isOwn ? 'justify-end' : 'justify-start'} ${className}`}>
      {showAvatar && !isOwn && (
        <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0">
          {avatar ? (
            <Image src={avatar} alt="Avatar" className="w-full h-full rounded-full object-cover" />
          ) : (
            <div className="w-full h-full rounded-full bg-primary flex items-center justify-center text-white">
              {sender?.[0]?.toUpperCase() || 'U'}
            </div>
          )}
        </div>
      )}
      
      <div className={`flex flex-col ${isOwn ? 'items-end' : 'items-start'} max-w-xs`}>
        {sender && !isOwn && (
          <span className="text-xs text-gray-500 mb-1">{sender}</span>
        )}
        
        <div
          className={`rounded-lg px-4 py-2 ${
            isOwn
              ? 'bg-primary text-white rounded-br-none'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-bl-none'
          }`}
        >
          <p className="text-sm">{message}</p>
        </div>
        
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs text-gray-500">{time}</span>
          {isOwn && status && (
            <span className="text-xs text-gray-500">
              {status === 'sent' ? '✓' : status === 'delivered' ? '✓✓' : '✓✓ ✓'}
            </span>
          )}
        </div>
      </div>
      
      {showAvatar && isOwn && (
        <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0">
          {avatar ? (
            <Image src={avatar} alt="Avatar" className="w-full h-full rounded-full object-cover" />
          ) : (
            <div className="w-full h-full rounded-full bg-primary flex items-center justify-center text-white">
              You
            </div>
          )}
        </div>
      )}
    </div>
  );
};