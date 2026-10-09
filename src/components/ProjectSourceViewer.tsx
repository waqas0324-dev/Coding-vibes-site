import React, { useMemo, useRef, useState } from 'react';
import JSZip from 'jszip';
import { highlightCode } from '../utils/prismHighlighter';
import {
  Copy,
  Check,
  Download,
  FileArchive,
  Eye,
  FileCode2
} from 'lucide-react';

interface SourceFile {
  key: string;
  filename: string;
  language: string;
  code: string;
}

interface ProjectSourceViewerProps {
  starterFiles?: {
    html: string;
    css?: string;
    js?: string;
  } | null;
  projectSlug: string;
}

export const ProjectSourceViewer: React.FC<ProjectSourceViewerProps> = ({
  starterFiles,
  projectSlug
}) => {
  const files: SourceFile[] = useMemo(() => {
    if (!starterFiles) return [];
    const list: SourceFile[] = [];
    if (starterFiles.html) {
      list.push({ key: 'html', filename: 'index.html', language: 'markup', code: starterFiles.html });
    }
    if (starterFiles.css) {
      list.push({ key: 'css', filename: 'styles.css', language: 'css', code: starterFiles.css });
    }
    if (starterFiles.js) {
      list.push({ key: 'js', filename: 'app.js', language: 'javascript', code: starterFiles.js });
    }
    return list;
  }, [starterFiles]);

  const [activeKey, setActiveKey] = useState<string>('html');
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef<number | null>(null);

  const activeFile = files.find(f => f.key === activeKey) || files[0];

  // Hide the entire section if there is nothing to show
  if (files.length === 0 || !activeFile) {
    return null;
  }

  const highlightedHtml = useMemo(() => {
    return highlightCode(activeFile.code, activeFile.language);
  }, [activeFile]);

  const previewSrcDoc = useMemo(() => {
    const html = starterFiles?.html || '';
    const css = starterFiles?.css || '';
    const js = starterFiles?.js || '';
    return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<style>${css}</style>
</head>
<body>
${html}
<script>${js}</script>
</body>
</html>`;
  }, [starterFiles]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeFile.code);
    } catch {
      // Fallback for older browsers
      const ta = document.createElement('textarea');
      ta.value = activeFile.code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    if (copyTimer.current) window.clearTimeout(copyTimer.current);
    copyTimer.current = window.setTimeout(() => setCopied(false), 1800);
  };

  const triggerDownload = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadFile = () => {
    const blob = new Blob([activeFile.code], { type: 'text/plain;charset=utf-8' });
    triggerDownload(blob, activeFile.filename);
  };

  const handleDownloadZip = async () => {
    const zip = new JSZip();
    for (const f of files) {
      zip.file(f.filename, f.code);
    }
    const blob = await zip.generateAsync({ type: 'blob' });
    triggerDownload(blob, `${projectSlug}-source.zip`);
  };

  return (
    <div className="rounded-2xl bg-[#0d131f] border border-[#1e293b] p-6 space-y-5">
      <style>{`
        .psv-code .token.comment, .psv-code .token.prolog, .psv-code .token.doctype, .psv-code .token.cdata { color: #64748b; }
        .psv-code .token.punctuation { color: #94a3b8; }
        .psv-code .token.tag, .psv-code .token.selector { color: #f87171; }
        .psv-code .token.attr-name, .psv-code .token.property { color: #a78bfa; }
        .psv-code .token.attr-value, .psv-code .token.string { color: #4ade80; }
        .psv-code .token.keyword, .psv-code .token.boolean, .psv-code .token.important { color: #60a5fa; }
        .psv-code .token.function, .psv-code .token.class-name { color: #fbbf24; }
        .psv-code .token.number, .psv-code .token.url { color: #fb923c; }
        .psv-code .token.operator { color: #94a3b8; }
      `}</style>

      {/* Section header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h2 className="text-lg sm:text-xl font-bold text-white flex items-center space-x-2">
          <FileCode2 className="w-5 h-5 text-[#22c55e]" />
          <span>Complete Project Source</span>
        </h2>
        <button
          onClick={handleDownloadZip}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-black font-bold text-xs transition duration-200 shrink-0"
        >
          <FileArchive className="w-4 h-4" />
          <span>Download ZIP</span>
        </button>
      </div>

      {/* Live preview */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Eye className="w-4 h-4 text-[#22c55e]" />
          <h3 className="text-sm font-bold text-white">Live Preview</h3>
          <span className="text-xs text-gray-500">Full project result</span>
        </div>
        <div className="rounded-xl overflow-hidden border border-[#1e293b]">
          <iframe
            title="Complete project live preview"
            srcDoc={previewSrcDoc}
            sandbox="allow-scripts"
            className="w-full h-[400px] bg-white"
          />
        </div>
      </div>

      {/* File tabs + actions */}
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-3">
          <div className="flex space-x-2 overflow-x-auto pb-1 grow">
            {files.map(f => (
              <button
                key={f.key}
                onClick={() => setActiveKey(f.key)}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold whitespace-nowrap transition ${
                  f.key === activeFile.key
                    ? 'bg-[#22c55e]/15 text-[#22c55e] border border-[#22c55e]/40'
                    : 'bg-[#080d14] text-gray-400 border border-[#1e293b] hover:border-gray-500'
                }`}
              >
                {f.filename}
              </button>
            ))}
          </div>
          <div className="flex space-x-2 shrink-0">
            <button
              onClick={handleCopy}
              className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-[#080d14] border border-[#1e293b] text-gray-300 hover:border-[#22c55e]/50 hover:text-white text-xs font-semibold transition"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#22c55e]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
            <button
              onClick={handleDownloadFile}
              className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-[#080d14] border border-[#1e293b] text-gray-300 hover:border-[#22c55e]/50 hover:text-white text-xs font-semibold transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>
          </div>
        </div>

        {/* Code view */}
        <div className="rounded-xl border border-[#1e293b] bg-[#080d14] overflow-hidden">
          <pre className={`psv-code language-${activeFile.language} text-xs leading-relaxed p-4 overflow-auto max-h-[480px]`}>
            <code dangerouslySetInnerHTML={{ __html: highlightedHtml }} />
          </pre>
        </div>
      </div>
    </div>
  );
};
