// components/ui/calendar.tsx
'use client';

import React, { useState } from 'react';

interface CalendarProps {
  value?: Date;
  onChange?: (date: Date) => void;
  className?: string;
  minDate?: Date;
  maxDate?: Date;
  multiple?: boolean;
  selectedDates?: Date[];
  onDatesChange?: (dates: Date[]) => void;
}

export const Calendar: React.FC<CalendarProps> = ({
  value,
  onChange,
  className = '',
  minDate,
  maxDate,
  multiple = false,
  selectedDates = [],
  onDatesChange
}) => {
  const [currentDate, setCurrentDate] = useState(value || new Date());
  const [view, setView] = useState<'month' | 'year'>('month');

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const isDateSelected = (date: Date) => {
    if (multiple) {
      return selectedDates.some(
        (d) =>
          d.getDate() === date.getDate() &&
          d.getMonth() === date.getMonth() &&
          d.getFullYear() === date.getFullYear()
      );
    } else if (value) {
      return (
        date.getDate() === value.getDate() &&
        date.getMonth() === value.getMonth() &&
        date.getFullYear() === value.getFullYear()
      );
    }
    return false;
  };

  const handleDateClick = (date: Date) => {
    if (minDate && date < minDate) return;
    if (maxDate && date > maxDate) return;

    if (multiple && onDatesChange) {
      const newDates = selectedDates.some(
        (d) =>
          d.getDate() === date.getDate() &&
          d.getMonth() === date.getMonth() &&
          d.getFullYear() === date.getFullYear()
      )
        ? selectedDates.filter(
            (d) =>
              !(
                d.getDate() === date.getDate() &&
                d.getMonth() === date.getMonth() &&
                d.getFullYear() === date.getFullYear()
              )
          )
        : [...selectedDates, date];
      
      onDatesChange(newDates);
    } else if (onChange) {
      onChange(date);
    }
  };

  const renderMonthView = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    
    const days = [];
    
    // Add empty cells for days before the first day of month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-8"></div>);
    }
    
    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const isSelected = isDateSelected(date);
      const isToday = 
        date.getDate() === new Date().getDate() &&
        date.getMonth() === new Date().getMonth() &&
        date.getFullYear() === new Date().getFullYear();
      
      days.push(
        <div
          key={`day-${i}`}
          className={`h-8 flex items-center justify-center rounded-full cursor-pointer ${
            isSelected
              ? 'bg-primary text-white'
              : isToday
              ? 'border border-primary text-primary'
              : 'hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
          onClick={() => handleDateClick(date)}
        >
          {i}
        </div>
      );
    }
    
    return days;
  };

  const renderYearView = () => {
    const year = currentDate.getFullYear();
    const years = [];
    
    for (let i = year - 6; i <= year + 5; i++) {
      years.push(
        <div
          key={i}
          className="h-12 flex items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
          onClick={() => {
            setCurrentDate(new Date(i, currentDate.getMonth(), 1));
            setView('month');
          }}
        >
          {i}
        </div>
      );
    }
    
    return years;
  };

  const monthNames = [
    'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
    'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
  ];

  const dayNames = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow p-4 w-64 ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => {
            if (view === 'month') {
              setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
            } else {
              setCurrentDate(new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), 1));
            }
          }}
          className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          &lt;
        </button>
        
        <div className="flex gap-2">
          <button
            onClick={() => setView('month')}
            className={`px-2 py-1 rounded ${
              view === 'month' ? 'bg-primary text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {monthNames[currentDate.getMonth()]}
          </button>
          <button
            onClick={() => setView('year')}
            className={`px-2 py-1 rounded ${
              view === 'year' ? 'bg-primary text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {currentDate.getFullYear()}
          </button>
        </div>
        
        <button
          onClick={() => {
            if (view === 'month') {
              setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
            } else {
              setCurrentDate(new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), 1));
            }
          }}
          className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          &gt;
        </button>
      </div>
      
      {view === 'month' && (
        <>
          <div className="grid grid-cols-7 gap-1 mb-2">
            {dayNames.map(day => (
              <div key={day} className="text-center text-sm font-medium text-gray-500 dark:text-gray-400">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {renderMonthView()}
          </div>
        </>
      )}
      
      {view === 'year' && (
        <div className="grid grid-cols-4 gap-2">
          {renderYearView()}
        </div>
      )}
    </div>
  );
};