// components/ui/team-member.tsx
import React from 'react';
import { Avatar } from './avatar';

interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

interface TeamMemberProps {
  name: string;
  role: string;
  avatar: string;
  description?: string;
  socialLinks?: SocialLink[];
  className?: string;
}

export const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  avatar,
  description,
  socialLinks,
  className = ''
}) => {
  return (
    <div className={`text-center ${className}`}>
      <Avatar src={avatar}  alt={name} size="xl" className="mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {name}
      </h3>
      <p className="text-primary mb-2">{role}</p>
      {description && (
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {description}
        </p>
      )}
      {socialLinks && (
        <div className="flex justify-center space-x-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label={link.platform}
            >
              {link.icon}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};