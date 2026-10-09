import React, { useMemo } from 'react';
import { Eye, Monitor } from 'lucide-react';

interface ExpectedOutputProps {
  html: string;
  css?: string;
  js?: string;
  title?: string;
  caption?: string;
}

export const ExpectedOutput: React.FC<ExpectedOutputProps> = ({
  html,
  css = '',
  js = '',
  title = 'Expected Browser Output',
  caption
}) => {
  const combinedSrcDoc = useMemo(() => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            * { box-sizing: border-box; }
            body {
              margin: 0;
              padding: 16px;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
              color: #f8fafc;
              background-color: #0c121d;
              line-height: 1.5;
            }
            a { color: #38bdf8; }
            button { cursor: pointer; }
            ${css}
          </style>
        </head>
        <body>
          ${html}
          <script>
            try {
              ${js}
            } catch (err) {
              console.error(err);
            }
          </script>
        </body>
      </html>
    `;
  }, [html, css, js]);

  return (
    <div className="my-5 rounded-2xl bg-[#090e17] border border-[#1e293b] overflow-hidden shadow-xl">
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0d1422] border-b border-[#1e293b]">
        <div className="flex items-center space-x-2">
          <Monitor className="w-4 h-4 text-[#22c55e]" />
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            {title}
          </span>
        </div>
        <div className="flex items-center space-x-1 text-[11px] text-[#4ade80] font-mono bg-[#22c55e]/15 px-2 py-0.5 rounded-full border border-[#22c55e]/30">
          <Eye className="w-3 h-3" />
          <span>Live Render</span>
        </div>
      </div>

      <div className="p-4 bg-[#05080f]">
        <div className="rounded-xl border border-[#1e293b] bg-[#0c121d] overflow-hidden shadow-inner">
          <iframe
            title={title}
            srcDoc={combinedSrcDoc}
            sandbox="allow-scripts"
            className="w-full min-h-[140px] max-h-[360px] border-none"
          />
        </div>
      </div>

      {caption && (
        <div className="px-4 py-2 bg-[#090e17] border-t border-[#1e293b] text-[11px] text-gray-400 italic">
          💡 {caption}
        </div>
      )}
    </div>
  );
};
