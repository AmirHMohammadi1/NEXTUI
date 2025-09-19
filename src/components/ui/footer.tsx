// components/ui/footer.tsx
import React from 'react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo: React.ReactNode;
  description?: string;
  links: FooterSection[];
  copyright: string;
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({
  logo,
  description,
  links,
  copyright,
  className = ''
}) => {
  return (
    <footer className={`bg-gray-900 text-white ${className}`}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            {logo}
            {description && (
              <p className="mt-4 text-gray-400">{description}</p>
            )}
          </div>

          {/* Links */}
          {links.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};