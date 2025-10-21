// components/ui/table-advanced.tsx
'use client';

import React, { useState } from 'react';


interface Column {
  key: string;
  header: string;
  sortable?: boolean;
  render?: (value: unknown, row: unknown) => React.ReactNode;
}

interface TableAdvancedProps {
  columns: Column[];
  data: unknown[];
  className?: string;
  pagination?: boolean;
  pageSize?: number;
  selectable?: boolean;
  onRowClick?: (row: unknown) => void;
}

export const TableAdvanced: React.FC<TableAdvancedProps> = ({
  columns,
  data,
  className = '',
  pagination = false,
  pageSize = 10,
  selectable = false,
  onRowClick
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
  const [selectedRows, setSelectedRows] = useState<Set<unknown>>(new Set());

  // Sorting
  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;

    return [...data].sort((a, b) => {
      const aRecord = a as Record<string, string>;
      const bRecord = b as Record<string, string>;
      const aValue = aRecord[sortConfig.key];
      const bValue = bRecord[sortConfig.key];

      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    
  }, [data, sortConfig]);

  // Pagination
  const paginatedData = pagination
    ? sortedData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    : sortedData;

  const totalPages = Math.ceil(sortedData.length / pageSize);

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const toggleRowSelection = (row: unknown) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(row)) {
      newSelected.delete(row);
    } else {
      newSelected.add(row);
    }
    setSelectedRows(newSelected);
  };

  const toggleAllSelection = () => {
    if (selectedRows.size === paginatedData.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(paginatedData));
    }
  };

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {selectable && (
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                <input
                  type="checkbox"
                  checked={selectedRows.size === paginatedData.length && paginatedData.length > 0}
                  onChange={toggleAllSelection}
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                />
              </th>
            )}
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={`px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider ${column.sortable ? 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700' : ''
                  }`}
                onClick={() => column.sortable && handleSort(column.key)}
              >
                <div className="flex items-center">
                  {column.header}
                  {column.sortable && (
                    <span className="ml-1">
                      {sortConfig && sortConfig.key === column.key ? (
                        sortConfig.direction === 'asc' ? '↑' : '↓'
                      ) : '↕'}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          {paginatedData.map((row, index) => (
            <tr
              key={index}
              className={`${onRowClick ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800' : ''
                } ${selectedRows.has(row) ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
              onClick={() => onRowClick && onRowClick(row)}
            >
              {selectable && (
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={selectedRows.has(row)}
                    onChange={() => toggleRowSelection(row)}
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                    onClick={(e) => e.stopPropagation()}
                  />
                </td>
              )}
              {columns.map((column) => (
                <td key={column.key} className="px-6 py-4 whitespace-nowrap">
                  {column.render ? column.render((row as Record<string, string>)[column.key], row) : (row as Record<string, string>)[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {pagination && totalPages > 1 && (
        <div className="flex items-center justify-between mt-4 px-4 py-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="flex-1 flex justify-between items-center">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
            >
              قبلی
            </button>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              صفحه <span className="font-medium">{currentPage}</span> از{' '}
              <span className="font-medium">{totalPages}</span>
            </span>
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
            >
              بعدی
            </button>
          </div>
        </div>
      )}
    </div>
  );
};