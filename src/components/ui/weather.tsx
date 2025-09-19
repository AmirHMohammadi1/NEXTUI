// components/ui/weather.tsx
'use client';

import React from 'react';

interface WeatherProps {
  temperature: number;
  condition: 'sunny' | 'cloudy' | 'rainy' | 'snowy' | 'stormy' | 'partly-cloudy';
  location: string;
  high?: number;
  low?: number;
  humidity?: number;
  wind?: number;
  className?: string;
}

export const Weather: React.FC<WeatherProps> = ({
  temperature,
  condition,
  location,
  high,
  low,
  humidity,
  wind,
  className = ''
}) => {
  const weatherIcons = {
    sunny: '☀️',
    cloudy: '☁️',
    rainy: '🌧️',
    snowy: '❄️',
    stormy: '⛈️',
    'partly-cloudy': '⛅'
  };

  return (
    <div className={`bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-xl p-6 ${className}`}>
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold">{location}</h2>
          <p className="text-lg opacity-90">{new Date().toLocaleDateString('fa-IR')}</p>
        </div>
        <span className="text-4xl">{weatherIcons[condition]}</span>
      </div>
      
      <div className="mt-4">
        <div className="text-5xl font-bold">{temperature}°C</div>
        <p className="text-lg capitalize mt-1">{condition.replace('-', ' ')}</p>
      </div>
      
      {(high !== undefined || low !== undefined || humidity !== undefined || wind !== undefined) && (
        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
          {high !== undefined && low !== undefined && (
            <div className="flex items-center">
              <span>▲ {high}°</span>
              <span className="mx-2">|</span>
              <span>▼ {low}°</span>
            </div>
          )}
          
          {humidity !== undefined && (
            <div className="flex items-center">
              <span>💧 {humidity}%</span>
            </div>
          )}
          
          {wind !== undefined && (
            <div className="flex items-center">
              <span>💨 {wind} km/h</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};