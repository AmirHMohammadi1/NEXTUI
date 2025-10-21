// components/ui/navbar.tsx
import React, { useState } from 'react';
// import { Button } from './button';

interface NavbarProps {
  logo: React.ReactNode;
  menuItems: { label: string; href: string }[];
  cta?: React.ReactNode;
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  logo,
  menuItems,
  cta,
  className = ''
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`bg-white dark:bg-gray-900 shadow-md ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {logo}
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            {cta}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t dark:border-gray-800">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
              {cta && (
                <div className="px-3 py-2">
                  {cta}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};