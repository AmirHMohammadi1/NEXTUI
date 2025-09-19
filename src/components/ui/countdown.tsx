// components/ui/countdown.tsx
'use client';

import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
  className?: string;
  onComplete?: () => void;
  showLabels?: boolean;
}

export const Countdown: React.FC<CountdownProps> = ({
  targetDate,
  className = '',
  onComplete,
  showLabels = true
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        setIsComplete(true);
        onComplete?.();
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  if (isComplete) {
    return (
      <div className={`text-center ${className}`}>
        <span className="text-lg font-semibold">زمان به پایان رسید!</span>
      </div>
    );
  }

  return (
    <div className={`flex justify-center gap-4 ${className}`}>
      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2 min-w-[3rem] text-center">
          {timeLeft.days.toString().padStart(2, '0')}
        </div>
        {showLabels && <span className="text-xs text-gray-500 mt-1">روز</span>}
      </div>
      
      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2 min-w-[3rem] text-center">
          {timeLeft.hours.toString().padStart(2, '0')}
        </div>
        {showLabels && <span className="text-xs text-gray-500 mt-1">ساعت</span>}
      </div>
      
      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2 min-w-[3rem] text-center">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </div>
        {showLabels && <span className="text-xs text-gray-500 mt-1">دقیقه</span>}
      </div>
      
      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2 min-w-[3rem] text-center">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
        {showLabels && <span className="text-xs text-gray-500 mt-1">ثانیه</span>}
      </div>
    </div>
  );
};