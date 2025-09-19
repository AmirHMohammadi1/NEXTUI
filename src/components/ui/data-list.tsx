// components/ui/data-list.tsx
import React from 'react';

interface DataListProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const DataList: React.FC<DataListProps> = ({
  id,
  children,
  className = ''
}) => {
  return (
    <datalist id={id} className={className}>
      {children}
    </datalist>
  );
};

interface DataListOptionProps {
  value: string;
  label?: string;
}

export const DataListOption: React.FC<DataListOptionProps> = ({
  value,
  label
}) => {
  return <option value={value}>{label || value}</option>;
};