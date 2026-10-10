import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'html',
  filename,
  showLineNumbers = true
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.trim().split('\n');

  // Tokenize a single line safely into React spans (no dangerouslySetInnerHTML chaining bugs)
  const renderHighlightedLine = (line: string, lang: string): React.ReactNode => {
    const trimmed = line.trim();
    if (!trimmed) {
      return <span>&nbsp;</span>;
    }

    // Full line comments
    if (trimmed.startsWith('<!--') || trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*')) {
      return <span className="text-gray-500 italic">{line}</span>;
    }

    const normLang = lang.toLowerCase();

    // HTML Tokenizer
    if (normLang === 'html' || normLang === 'htm') {
      const nodes: React.ReactNode[] = [];
      // Regex matches: HTML comments, DOCTYPE, tags, attributes, strings, text
      const htmlRegex = /(<!--[\s\S]*?-->|<!DOCTYPE[^>]*>|<\/?[a-zA-Z0-9\-]+|[a-zA-Z\-]+(?==)|="[^"]*"|='[^']*'|>|\/?>|[^<="'>\s]+|\s+)/g;
      let match: RegExpExecArray | null;
      let key = 0;

      while ((match = htmlRegex.exec(line)) !== null) {
        const token = match[0];
        if (token.startsWith('<!--')) {
          nodes.push(<span key={key++} className="text-gray-500 italic">{token}</span>);
        } else if (token.toUpperCase().startsWith('<!DOCTYPE')) {
          nodes.push(<span key={key++} className="text-amber-400 font-bold">{token}</span>);
        } else if (token.startsWith('</') || token.startsWith('<')) {
          nodes.push(<span key={key++} className="text-[#38bdf8] font-bold">{token}</span>);
        } else if (token === '>' || token === '/>') {
          nodes.push(<span key={key++} className="text-[#38bdf8] font-bold">{token}</span>);
        } else if (token.startsWith('="') || token.startsWith("='")) {
          const quote = token[1];
          const val = token.slice(2, -1);
          nodes.push(<span key={key++} className="text-gray-400">=</span>);
          nodes.push(<span key={key++} className="text-emerald-400">{quote}{val}{quote}</span>);
        } else if (/^[a-zA-Z\-]+$/.test(token) && line[match.index + token.length] === '=') {
          nodes.push(<span key={key++} className="text-amber-300">{token}</span>);
        } else {
          nodes.push(<span key={key++} className="text-gray-200">{token}</span>);
        }
      }

      return nodes.length > 0 ? nodes : <span>{line}</span>;
    }

    // CSS Tokenizer
    if (normLang === 'css') {
      const nodes: React.ReactNode[] = [];
      const cssRegex = /(\/\*[\s\S]*?\*\/|[-a-zA-Z]+(?=\s*:)|:[^;{}]+;|[{}]|[.#]?[a-zA-Z0-9_\-]+|\s+)/g;
      let match: RegExpExecArray | null;
      let key = 0;

      while ((match = cssRegex.exec(line)) !== null) {
        const token = match[0];
        if (token.startsWith('/*')) {
          nodes.push(<span key={key++} className="text-gray-500 italic">{token}</span>);
        } else if (token.startsWith('.') || token.startsWith('#')) {
          nodes.push(<span key={key++} className="text-purple-400 font-bold">{token}</span>);
        } else if (token.endsWith(':') || (match.index > 0 && line[match.index + token.length] === ':')) {
          nodes.push(<span key={key++} className="text-sky-300">{token}</span>);
        } else if (token.startsWith(':') && token.endsWith(';')) {
          const val = token.slice(1, -1);
          nodes.push(<span key={key++} className="text-gray-400">:</span>);
          nodes.push(<span key={key++} className="text-emerald-300">{val}</span>);
          nodes.push(<span key={key++} className="text-gray-400">;</span>);
        } else if (token === '{' || token === '}') {
          nodes.push(<span key={key++} className="text-amber-400">{token}</span>);
        } else {
          nodes.push(<span key={key++} className="text-gray-200">{token}</span>);
        }
      }

      return nodes.length > 0 ? nodes : <span>{line}</span>;
    }

    // JavaScript / TypeScript Tokenizer
    if (normLang === 'js' || normLang === 'javascript' || normLang === 'ts' || normLang === 'typescript') {
      const nodes: React.ReactNode[] = [];
      const jsKeywords = new Set([
        'function', 'const', 'let', 'var', 'return', 'if', 'else', 'for', 'while',
        'import', 'export', 'from', 'class', 'extends', 'new', 'this', 'typeof',
        'async', 'await', 'try', 'catch', 'finally', 'switch', 'case', 'break', 'default'
      ]);

      const jsRegex = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|"[^"]*"|'[^']*'|`[^`]*`|\b[a-zA-Z0-9_$]+\b|[^\s\w]+|\s+)/g;
      let match: RegExpExecArray | null;
      let key = 0;

      while ((match = jsRegex.exec(line)) !== null) {
        const token = match[0];
        if (token.startsWith('//') || token.startsWith('/*')) {
          nodes.push(<span key={key++} className="text-gray-500 italic">{token}</span>);
        } else if (token.startsWith('"') || token.startsWith("'") || token.startsWith('`')) {
          nodes.push(<span key={key++} className="text-emerald-400">{token}</span>);
        } else if (jsKeywords.has(token)) {
          nodes.push(<span key={key++} className="text-purple-400 font-bold">{token}</span>);
        } else if (/^\d+$/.test(token)) {
          nodes.push(<span key={key++} className="text-amber-300">{token}</span>);
        } else if (token === 'true' || token === 'false' || token === 'null' || token === 'undefined') {
          nodes.push(<span key={key++} className="text-rose-400 font-semibold">{token}</span>);
        } else {
          nodes.push(<span key={key++} className="text-gray-200">{token}</span>);
        }
      }

      return nodes.length > 0 ? nodes : <span>{line}</span>;
    }

    // Fallback plain line
    return <span>{line}</span>;
  };

  return (
    <div className="my-4 rounded-xl overflow-hidden border border-[#1e293b] bg-[#0d131f] shadow-lg max-w-full">
      {/* Code Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#090e17] border-b border-[#1e293b]">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/80"></div>
          </div>
          {filename && (
            <span className="text-xs font-mono text-gray-400 ml-2">{filename}</span>
          )}
        </div>

        <div className="flex items-center space-x-3">
          <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 px-2 py-0.5 rounded bg-[#1e293b]/60">
            {language}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center space-x-1 text-xs text-gray-400 hover:text-white px-2 py-1 rounded hover:bg-[#1e293b] transition"
            title="Copy code"
            aria-label="Copy code to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#22c55e]" />
                <span className="text-[#22c55e] text-xs font-medium">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="text-xs">Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code lines container with internal horizontal scroll only */}
      <div className="p-3 sm:p-4 overflow-x-auto font-mono text-xs sm:text-sm leading-relaxed text-gray-200 [-webkit-overflow-scrolling:touch]">
        <pre className="flex flex-col min-w-max">
          {lines.map((line, idx) => (
            <div key={idx} className="flex hover:bg-white/5 rounded px-1 -mx-1">
              {showLineNumbers && (
                <span className="w-7 sm:w-8 select-none text-right pr-3 sm:pr-4 text-gray-600 shrink-0 text-xs leading-6 font-mono">
                  {idx + 1}
                </span>
              )}
              <code className="text-xs sm:text-sm leading-6 whitespace-pre font-mono">
                {renderHighlightedLine(line, language)}
              </code>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
};
