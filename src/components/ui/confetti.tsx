// components/ui/confetti.tsx
'use client';

import React, { useEffect, useState } from 'react';

interface ConfettiProps {
  active: boolean;
  onComplete?: () => void;
  duration?: number;
  className?: string;
}

export const Confetti: React.FC<ConfettiProps> = ({
  active,
  onComplete,
  duration = 3000,
  className = ''
}) => {
  const [confetti, setConfetti] = useState<Array<{
    id: number;
    style: React.CSSProperties;
  }>>([]);

  useEffect(() => {
    if (active) {
      const newConfetti = [];
      const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
      
      for (let i = 0; i < 100; i++) {
        newConfetti.push({
          id: i,
          style: {
            '--x': Math.random() * 100 + 'vw',
            '--y': Math.random() * 100 + 'vh',
            '--angle': Math.random() * 360 + 'deg',
            '--delay': Math.random() * 2 + 's',
            '--duration': Math.random() * 1 + 2 + 's',
            '--color': colors[Math.floor(Math.random() * colors.length)]
          } as React.CSSProperties
        });
      }
      
      setConfetti(newConfetti);
      
      const timer = setTimeout(() => {
        setConfetti([]);
        onComplete?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [active, duration, onComplete]);

  if (!active || confetti.length === 0) return null;

  return (
    <div className={`fixed inset-0 pointer-events-none z-50 ${className}`}>
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-2 h-2 opacity-70"
          style={{
            left: `calc(var(--x) - 1rem)`,
            top: `calc(var(--y) - 1rem)`,
            backgroundColor: 'var(--color)',
            animation: `confetti-fall var(--duration) var(--delay) forwards`,
            transform: `rotate(var(--angle))`
          }}
        />
      ))}
      
      <style>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotate(var(--angle));
          }
          100% {
            transform: translateY(100vh) rotate(calc(var(--angle) + 720deg));
          }
        }
      `}</style>
    </div>
  );
};