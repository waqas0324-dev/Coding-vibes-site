import React from 'react';

interface FormattedTextProps {
  text: string;
  className?: string;
}

export const FormattedText: React.FC<FormattedTextProps> = ({ text, className = '' }) => {
  if (!text) return null;

  // Tokenize string for **bold text** and `inline code`
  // Regex matches `code` or **bold** or normal text
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*.*?\*\*|`.*?`)/g;
  let lastIndex = 0;
  let match;

  let keyIndex = 0;

  while ((match = regex.exec(text)) !== null) {
    const matchIndex = match.index;
    if (matchIndex > lastIndex) {
      parts.push(
        <span key={`text-${keyIndex++}`}>
          {text.substring(lastIndex, matchIndex)}
        </span>
      );
    }

    const token = match[0];
    if (token.startsWith('**') && token.endsWith('**')) {
      const boldContent = token.slice(2, -2);
      parts.push(
        <strong key={`bold-${keyIndex++}`} className="font-extrabold text-[#282A35] dark:text-white">
          {boldContent}
        </strong>
      );
    } else if (token.startsWith('`') && token.endsWith('`')) {
      const codeContent = token.slice(1, -1);
      parts.push(
        <code
          key={`code-${keyIndex++}`}
          className="px-1.5 py-0.5 mx-0.5 rounded bg-gray-100 dark:bg-[#1e293b] text-[#04AA6D] dark:text-[#4ade80] font-mono text-[0.9em] border border-gray-300 dark:border-[#334155]/60 font-semibold"
        >
          {codeContent}
        </code>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(
      <span key={`text-${keyIndex++}`}>
        {text.substring(lastIndex)}
      </span>
    );
  }

  return <span className={className}>{parts}</span>;
};
