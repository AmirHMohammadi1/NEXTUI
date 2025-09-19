// components/ui/datepicker.tsx
'use client';

import React, { useState } from 'react';

interface DatePickerProps {
  value?: Date;
  onChange: (date: Date) => void;
  label?: string;
  error?: string;
  className?: string;
  minDate?: Date;
  maxDate?: Date;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  label,
  error,
  className = '',
  minDate,
  maxDate
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(value || new Date());

  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getMonthDays = (month: number, year: number) => {
    const days = [];
    const daysCount = daysInMonth(month, year);
    const firstDay = new Date(year, month, 1).getDay();
    
    // Add empty cells for days before the first day of month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let i = 1; i <= daysCount; i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    onChange(date);
    setIsOpen(false);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('fa-IR');
  };

  return (
    <div className={`relative ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <div
        className={`mt-1 p-2 border rounded-md cursor-pointer ${error ? 'border-error' : 'border-gray-300'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {formatDate(selectedDate)}
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg p-4 w-64">
          <div className="flex justify-between items-center mb-4">
            <button onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))}>
              &lt;
            </button>
            <span className="font-medium">
              {selectedDate.toLocaleDateString('fa-IR', { month: 'long', year: 'numeric' })}
            </span>
            <button onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))}>
              &gt;
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'].map(day => (
              <div key={day} className="text-center text-sm font-medium py-1">
                {day}
              </div>
            ))}
            {getMonthDays(selectedDate.getMonth(), selectedDate.getFullYear()).map((day, index) => (
              <div
                key={index}
                className={`text-center p-1 rounded cursor-pointer ${
                  day
                    ? day.getDate() === selectedDate.getDate()
                      ? 'bg-primary text-white'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                    : ''
                }`}
                onClick={() => day && handleDateSelect(day)}
              >
                {day ? day.getDate() : ''}
              </div>
            ))}
          </div>
        </div>
      )}
      {error && <div className="text-error text-sm mt-1">{error}</div>}
    </div>
  );
};