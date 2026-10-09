import Prism from 'prismjs';

// Import essential language syntaxes
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Maps common language aliases to supported Prism grammar keys
 */
export function normalizeLanguage(lang?: string): string {
  if (!lang) return 'markup';
  const lower = lang.toLowerCase().trim();

  switch (lower) {
    case 'html':
    case 'htm':
    case 'xml':
    case 'svg':
    case 'markup':
      return 'markup';
    case 'css':
      return 'css';
    case 'js':
    case 'javascript':
    case 'node':
      return 'javascript';
    case 'ts':
    case 'typescript':
      return 'typescript';
    case 'py':
    case 'python':
    case 'python3':
      return 'python';
    case 'sql':
    case 'sqlite':
    case 'mysql':
    case 'postgresql':
      return 'sql';
    case 'java':
      return 'java';
    case 'c':
      return 'c';
    case 'cpp':
    case 'c++':
      return 'cpp';
    case 'cs':
    case 'csharp':
    case 'c#':
      return 'csharp';
    case 'php':
      return 'php';
    case 'json':
      return 'json';
    case 'sh':
    case 'bash':
    case 'shell':
      return 'bash';
    default:
      return 'markup';
  }
}

/**
 * Highlights code string using Prism, with fallback to escaped HTML
 */
export function highlightCode(code: string, language?: string): string {
  if (!code) return '';

  const grammarKey = normalizeLanguage(language);
  const grammar = Prism.languages[grammarKey] || Prism.languages.markup;

  try {
    return Prism.highlight(code, grammar, grammarKey);
  } catch {
    return escapeHtml(code);
  }
}
