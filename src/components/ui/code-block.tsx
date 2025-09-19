// components/ui/code-block.tsx
import React from 'react';

interface CodeBlockProps {
  code: string;
  language: string;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language,
  className = ''
}) => {
  return (
    <div className={`bg-gray-900 rounded-lg p-4 overflow-x-auto ${className}`}>
      <pre className="text-white font-mono text-sm">
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};