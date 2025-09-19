// components/ui/chart.tsx
'use client';

import React from 'react';

interface ChartProps {
  type: 'bar' | 'line' | 'pie' | 'doughnut';
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor?: string | string[];
      borderColor?: string | string[];
      borderWidth?: number;
    }[];
  };
  options?: any;
  className?: string;
}

export const Chart: React.FC<ChartProps> = ({ type, data, options, className = '' }) => {
  // This is a simplified chart component
  // In a real implementation, you would use a charting library like Chart.js or Recharts
  
  const getChartSvg = () => {
    switch (type) {
      case 'bar':
        return (
          <div className="flex items-end h-48 gap-1 p-4">
            {data.datasets[0].data.map((value, index) => (
              <div
                key={index}
                className="flex-1 bg-primary flex items-end justify-center rounded-t"
                style={{ height: `${(value / Math.max(...data.datasets[0].data)) * 100}%` }}
              >
                <span className="text-xs text-white mb-1">{value}</span>
              </div>
            ))}
          </div>
        );
      case 'line':
        return (
          <div className="relative h-48 p-4">
            <div className="absolute inset-0 flex items-center">
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>
            <div className="relative h-full">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polyline
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeWidth="2"
                  points={data.datasets[0].data
                    .map((d, i) => {
                      const x = (i / (data.datasets[0].data.length - 1)) * 100;
                      const y = 100 - (d / Math.max(...data.datasets[0].data)) * 100;
                      return `${x},${y}`;
                    })
                    .join(' ')}
                />
              </svg>
            </div>
          </div>
        );
      case 'pie':
      case 'doughnut':
        return (
          <div className="relative w-48 h-48 mx-auto">
            <div className="absolute inset-0 rounded-full border-8 border-primary"></div>
            <div className="absolute inset-8 rounded-full bg-gray-100"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold">
                {data.datasets[0].data.reduce((a, b) => a + b, 0)}
              </span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow p-4 ${className}`}>
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        {data.datasets[0].label}
      </h3>
      {getChartSvg()}
      <div className="mt-4 flex justify-center gap-4 flex-wrap">
        {data.labels.map((label, index) => (
          <div key={index} className="flex items-center">
            <div
              className="w-3 h-3 rounded-full mr-2"
              style={{
                backgroundColor:
                  typeof data.datasets[0].backgroundColor === 'string'
                    ? data.datasets[0].backgroundColor
                    : data.datasets[0].backgroundColor?.[index] || 'var(--color-primary)',
              }}
            ></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};