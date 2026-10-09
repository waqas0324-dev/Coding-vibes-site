import prettier from 'prettier/standalone';
import parserHtml from 'prettier/plugins/html';
import parserPostcss from 'prettier/plugins/postcss';
import parserBabel from 'prettier/plugins/babel';
import parserEstree from 'prettier/plugins/estree';
import parserMarkdown from 'prettier/plugins/markdown';

export type SupportedFormatLanguage =
  | 'html'
  | 'css'
  | 'javascript'
  | 'js'
  | 'typescript'
  | 'ts'
  | 'json'
  | 'markdown'
  | 'md';

/**
 * Automatically beautifies the provided code using Prettier in the browser.
 * Falls back to clean indentation / formatting if Prettier encounters syntax errors
 * or unsupported languages (e.g. Python, C++, SQL).
 */
export async function formatCode(
  code: string,
  language: string = 'html'
): Promise<{ formatted: string; success: boolean; error?: string }> {
  if (!code || !code.trim()) {
    return { formatted: code, success: true };
  }

  const lang = (language || '').toLowerCase().trim();

  try {
    // 1. HTML / XML / Web documents
    if (lang === 'html' || lang === 'xml' || lang === 'svg' || lang === 'bootstrap') {
      const formatted = await prettier.format(code, {
        parser: 'html',
        plugins: [parserHtml, parserPostcss, parserBabel, parserEstree],
        tabWidth: 2,
        useTabs: false,
        printWidth: 80,
        htmlWhitespaceSensitivity: 'css',
      });
      return { formatted, success: true };
    }

    // 2. CSS / SCSS / LESS
    if (lang === 'css' || lang === 'scss' || lang === 'less') {
      const formatted = await prettier.format(code, {
        parser: 'css',
        plugins: [parserPostcss],
        tabWidth: 2,
        useTabs: false,
        printWidth: 80,
      });
      return { formatted, success: true };
    }

    // 3. JavaScript / TypeScript / React JSX
    if (
      lang === 'javascript' ||
      lang === 'js' ||
      lang === 'jsx' ||
      lang === 'ts' ||
      lang === 'typescript' ||
      lang === 'tsx'
    ) {
      const formatted = await prettier.format(code, {
        parser: 'babel',
        plugins: [parserBabel, parserEstree],
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        trailingComma: 'es5',
      });
      return { formatted, success: true };
    }

    // 4. JSON
    if (lang === 'json') {
      try {
        const parsed = JSON.parse(code);
        return { formatted: JSON.stringify(parsed, null, 2), success: true };
      } catch {
        const formatted = await prettier.format(code, {
          parser: 'json',
          plugins: [parserBabel, parserEstree],
          tabWidth: 2,
        });
        return { formatted, success: true };
      }
    }

    // 5. Markdown
    if (lang === 'markdown' || lang === 'md') {
      const formatted = await prettier.format(code, {
        parser: 'markdown',
        plugins: [parserMarkdown],
        tabWidth: 2,
      });
      return { formatted, success: true };
    }

    // 6. SQL / Python / Other languages: graceful indentation fallback
    const fallbackFormatted = beautifyIndentation(code, lang);
    return { formatted: fallbackFormatted, success: true };
  } catch (err: any) {
    // If Prettier throws (e.g. invalid syntax), try safe basic beautifier or return error
    const msg = err?.message || String(err);
    return {
      formatted: code,
      success: false,
      error: msg,
    };
  }
}

/**
 * Fallback lightweight beautifier for non-Prettier formats or partial code snippets
 */
function beautifyIndentation(code: string, lang: string): string {
  if (lang === 'sql') {
    const keywords = [
      'SELECT',
      'FROM',
      'WHERE',
      'AND',
      'OR',
      'GROUP BY',
      'ORDER BY',
      'HAVING',
      'LIMIT',
      'JOIN',
      'LEFT JOIN',
      'RIGHT JOIN',
      'INNER JOIN',
      'INSERT INTO',
      'VALUES',
      'UPDATE',
      'SET',
      'DELETE FROM',
      'CREATE TABLE',
    ];
    let res = code;
    keywords.forEach((kw) => {
      const regex = new RegExp(`\\b${kw}\\b`, 'gi');
      res = res.replace(regex, kw);
    });
    return res;
  }

  // Basic indentation by braces
  const lines = code.split('\n');
  let indentLevel = 0;
  const resultLines: string[] = [];

  for (let rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      resultLines.push('');
      continue;
    }

    if (line.startsWith('}') || line.startsWith(']') || line.startsWith('</')) {
      indentLevel = Math.max(0, indentLevel - 1);
    }

    resultLines.push('  '.repeat(indentLevel) + line);

    if (
      (line.endsWith('{') || line.endsWith('[') || (line.startsWith('<') && !line.includes('</') && line.endsWith('>'))) &&
      !line.endsWith('/>')
    ) {
      indentLevel++;
    }
  }

  return resultLines.join('\n');
}
