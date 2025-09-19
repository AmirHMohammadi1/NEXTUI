// components/theme-provider.tsx
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    neutral: string;
    success: string;
    warning: string;
    error: string;
    background: string;
    text: string;
  };
  setThemeColor: (colorType: keyof ThemeContextType['theme'], color: string) => void;
  isDark: boolean;
  toggleDarkMode: () => void;
}

const defaultLightTheme = {
  primary: '#3b82f6',
  secondary: '#6b7280',
  accent: '#ec4899',
  neutral: '#6b7280',
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  background: '#ffffff',
  text: '#1f2937'
};

const defaultDarkTheme = {
  primary: '#3b82f6',
  secondary: '#9ca3af',
  accent: '#ec4899',
  neutral: '#6b7280',
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  background: '#111827',
  text: '#f3f4f6'
};

const ThemeContext = createContext<ThemeContextType>({
  theme: defaultLightTheme,
  setThemeColor: () => {},
  isDark: false,
  toggleDarkMode: () => {},
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: React.ReactNode;
  customTheme?: Partial<ThemeContextType['theme']>;
  defaultDark?: boolean;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  customTheme,
  defaultDark = false
}) => {
  const [isDark, setIsDark] = useState(defaultDark);
  const [theme, setTheme] = useState(isDark ? {...defaultDarkTheme, ...customTheme} : {...defaultLightTheme, ...customTheme});

  const setThemeColor = (colorType: keyof ThemeContextType['theme'], color: string) => {
    setTheme(prev => ({ ...prev, [colorType]: color }));
  };

  const toggleDarkMode = () => {
    setIsDark(prev => !prev);
  };

  useEffect(() => {
    setTheme(isDark ? {...defaultDarkTheme, ...customTheme} : {...defaultLightTheme, ...customTheme});
  }, [isDark, customTheme]);

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme, isDark]);

  return (
    <ThemeContext.Provider value={{ theme, setThemeColor, isDark, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};