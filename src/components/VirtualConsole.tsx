import React, { useState, useEffect, useRef } from 'react';
import { ConsoleLogEntry, ConsoleLogType } from '../types';
import {
  Terminal,
  AlertCircle,
  AlertTriangle,
  Info,
  Trash2,
  ChevronDown,
  ChevronUp,
  Maximize2,
  Minimize2,
  CornerDownLeft,
  Search,
  Copy,
  Check,
  X,
  ArrowDown
} from 'lucide-react';

export interface VirtualConsoleProps {
  logs: ConsoleLogEntry[];
  isOpen: boolean;
  onToggleOpen: () => void;
  onClear: () => void;
  onExecuteCommand?: (command: string) => void;
  language?: string;
  className?: string;
}

export const VirtualConsole: React.FC<VirtualConsoleProps> = ({
  logs,
  isOpen,
  onToggleOpen,
  onClear,
  onExecuteCommand,
  language = 'html',
  className = ''
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'log' | 'warn' | 'error'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [panelHeight, setPanelHeight] = useState<number>(220);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isDraggingHeight, setIsDraggingHeight] = useState(false);
  const [autoScroll, setAutoScroll] = useState(true);
  const [replInput, setReplInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [copiedLogId, setCopiedLogId] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const logsContainerRef = useRef<HTMLDivElement>(null);
  const replInputRef = useRef<HTMLInputElement>(null);
  const startDragYRef = useRef<number>(0);
  const startHeightRef = useRef<number>(220);

  // Filter logs by type and search query
  const filteredLogs = logs.filter((log) => {
    // Type filter
    if (activeFilter === 'log' && log.type !== 'log' && log.type !== 'info' && log.type !== 'result') return false;
    if (activeFilter === 'warn' && log.type !== 'warn') return false;
    if (activeFilter === 'error' && log.type !== 'error') return false;

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchesMsg = log.message.toLowerCase().includes(q);
      const matchesType = log.type.toLowerCase().includes(q);
      const matchesLine = log.line ? `line ${log.line}`.includes(q) : false;
      return matchesMsg || matchesType || matchesLine;
    }

    return true;
  });

  const errorCount = logs.filter((l) => l.type === 'error').length;
  const warnCount = logs.filter((l) => l.type === 'warn').length;
  const logCount = logs.filter((l) => l.type === 'log' || l.type === 'info' || l.type === 'result').length;

  // Auto-scroll to bottom when logs update
  useEffect(() => {
    if (isOpen && autoScroll && logsContainerRef.current) {
      logsContainerRef.current.scrollTop = logsContainerRef.current.scrollHeight;
    }
  }, [logs, isOpen, autoScroll]);

  // Handle height resizing via drag
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingHeight) return;
      const deltaY = startDragYRef.current - e.clientY;
      const newHeight = Math.max(120, Math.min(window.innerHeight * 0.75, startHeightRef.current + deltaY));
      setPanelHeight(newHeight);
    };

    const handleMouseUp = () => {
      if (isDraggingHeight) {
        setIsDraggingHeight(false);
      }
    };

    if (isDraggingHeight) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDraggingHeight]);

  const handleStartResize = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDraggingHeight(true);
    startDragYRef.current = e.clientY;
    startHeightRef.current = panelHeight;
  };

  const handleExecute = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = replInput.trim();
    if (!trimmed) return;

    if (onExecuteCommand) {
      onExecuteCommand(trimmed);
    }

    setHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);
    setReplInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setReplInput(history[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(-1);
        setReplInput('');
      } else {
        setHistoryIndex(nextIndex);
        setReplInput(history[nextIndex]);
      }
    }
  };

  const handleCopyLog = (log: ConsoleLogEntry) => {
    navigator.clipboard.writeText(log.message);
    setCopiedLogId(log.id);
    setTimeout(() => setCopiedLogId(null), 1500);
  };

  const handleCopyAll = () => {
    if (logs.length === 0) return;
    const allText = logs.map((l) => `[${l.time}] [${l.type.toUpperCase()}] ${l.message}`).join('\n');
    navigator.clipboard.writeText(allText);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  const getLogIcon = (type: ConsoleLogType) => {
    switch (type) {
      case 'error':
        return <AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />;
      case 'warn':
        return <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />;
      case 'info':
        return <Info className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />;
      case 'eval':
        return <span className="font-mono font-bold text-gray-400 text-xs shrink-0 select-none mt-0.5">&gt;</span>;
      case 'result':
        return <CornerDownLeft className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />;
      default:
        return <span className="font-mono font-bold text-[#04AA6D] text-xs shrink-0 select-none mt-0.5">&gt;</span>;
    }
  };

  const getLogRowStyle = (type: ConsoleLogType) => {
    switch (type) {
      case 'error':
        return 'bg-red-950/25 border-l-2 border-red-500 text-red-200';
      case 'warn':
        return 'bg-amber-950/25 border-l-2 border-amber-500 text-amber-200';
      case 'info':
        return 'bg-sky-950/20 border-l-2 border-sky-500 text-sky-200';
      case 'eval':
        return 'bg-white/5 border-l-2 border-gray-600 text-gray-300 italic';
      case 'result':
        return 'bg-emerald-950/20 border-l-2 border-emerald-500 text-emerald-200 font-semibold';
      default:
        return 'border-l-2 border-transparent text-gray-200 hover:bg-white/5';
    }
  };

  // Latest log message for preview bar
  const latestLog = logs.length > 0 ? logs[logs.length - 1] : null;

  return (
    <div
      className={`border-t border-gray-200 dark:border-[#222f43] bg-[#0c1017] text-gray-200 flex flex-col shrink-0 select-none transition-all duration-150 ${className}`}
      style={{
        height: isOpen ? (isMaximized ? '55vh' : `${panelHeight}px`) : '36px'
      }}
    >
      {/* Resizing Drag Handle (Only when expanded) */}
      {isOpen && !isMaximized && (
        <div
          onMouseDown={handleStartResize}
          className="h-1.5 w-full bg-gray-800 hover:bg-[#04AA6D] cursor-ns-resize transition select-none flex items-center justify-center shrink-0"
          title="Drag up/down to resize console"
        >
          <div className="w-10 h-0.5 bg-gray-600 rounded-full" />
        </div>
      )}

      {/* Console Header Bar */}
      <div className="h-9 px-3 bg-[#111622] border-b border-gray-800 flex items-center justify-between shrink-0 select-none">
        {/* Left: Toggle & Title & Status Badges */}
        <div className="flex items-center space-x-2 sm:space-x-3 overflow-hidden">
          <button
            onClick={onToggleOpen}
            className="flex items-center space-x-1.5 text-gray-300 hover:text-white font-mono text-xs font-bold transition cursor-pointer"
            title={isOpen ? 'Collapse console' : 'Expand console'}
          >
            {isOpen ? (
              <ChevronDown className="w-4 h-4 text-[#04AA6D]" />
            ) : (
              <ChevronUp className="w-4 h-4 text-gray-400" />
            )}
            <Terminal className="w-3.5 h-3.5 text-[#04AA6D]" />
            <span className="tracking-wide">CONSOLE</span>
          </button>

          {/* Counts */}
          <div className="flex items-center space-x-1 font-mono text-[11px]">
            {errorCount > 0 && (
              <span className="flex items-center space-x-0.5 px-1.5 py-0.5 rounded-full bg-red-900/60 text-red-300 border border-red-700/60 font-bold">
                <AlertCircle className="w-3 h-3" />
                <span>{errorCount}</span>
              </span>
            )}
            {warnCount > 0 && (
              <span className="flex items-center space-x-0.5 px-1.5 py-0.5 rounded-full bg-amber-900/60 text-amber-300 border border-amber-700/60 font-bold">
                <AlertTriangle className="w-3 h-3" />
                <span>{warnCount}</span>
              </span>
            )}
            {logs.length > 0 && (
              <span className="text-gray-400 px-1.5 py-0.5 rounded bg-gray-800/60 text-[10px]">
                {logs.length}
              </span>
            )}
          </div>

          {/* Collapsed State Preview */}
          {!isOpen && latestLog && (
            <div className="hidden md:flex items-center space-x-1.5 text-[11px] font-mono text-gray-400 truncate max-w-md pl-2 border-l border-gray-700">
              <span className="text-gray-500">Latest:</span>
              <span
                className={`truncate ${
                  latestLog.type === 'error'
                    ? 'text-red-400 font-semibold'
                    : latestLog.type === 'warn'
                    ? 'text-amber-300'
                    : 'text-gray-300'
                }`}
              >
                {latestLog.message}
              </span>
            </div>
          )}

          {/* Filter Tabs (when open) */}
          {isOpen && (
            <div className="hidden sm:flex items-center space-x-1 pl-2 border-l border-gray-800 text-[11px] font-mono">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-2 py-0.5 rounded transition cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-[#04AA6D] text-white font-bold'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveFilter('log')}
                className={`px-2 py-0.5 rounded transition cursor-pointer ${
                  activeFilter === 'log'
                    ? 'bg-sky-600 text-white font-bold'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
                }`}
              >
                Logs ({logCount})
              </button>
              <button
                onClick={() => setActiveFilter('warn')}
                className={`px-2 py-0.5 rounded transition cursor-pointer ${
                  activeFilter === 'warn'
                    ? 'bg-amber-600 text-white font-bold'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
                }`}
              >
                Warnings ({warnCount})
              </button>
              <button
                onClick={() => setActiveFilter('error')}
                className={`px-2 py-0.5 rounded transition cursor-pointer ${
                  activeFilter === 'error'
                    ? 'bg-red-600 text-white font-bold'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
                }`}
              >
                Errors ({errorCount})
              </button>
            </div>
          )}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center space-x-1.5 font-mono text-xs">
          {isOpen ? (
            <>
              {/* Search filter */}
              <div className="hidden lg:flex items-center bg-gray-900 border border-gray-700/80 rounded px-1.5 py-0.5 text-xs text-gray-300">
                <Search className="w-3 h-3 text-gray-500 mr-1" />
                <input
                  type="text"
                  placeholder="Filter logs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-[11px] outline-none w-24 focus:w-36 transition-all text-white placeholder-gray-500"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="text-gray-500 hover:text-gray-300">
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* Copy all logs */}
              {logs.length > 0 && (
                <button
                  onClick={handleCopyAll}
                  className="p-1 rounded text-gray-400 hover:text-white hover:bg-gray-800 transition cursor-pointer"
                  title="Copy all logs"
                >
                  {copiedAll ? <Check className="w-3.5 h-3.5 text-[#04AA6D]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              )}

              {/* Clear console */}
              <button
                onClick={onClear}
                className="flex items-center space-x-1 px-2 py-1 rounded text-gray-400 hover:text-red-400 hover:bg-red-950/30 transition text-[11px] cursor-pointer"
                title="Clear console (Ctrl+L)"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Clear</span>
              </button>

              {/* Maximize / Restore */}
              <button
                onClick={() => setIsMaximized(!isMaximized)}
                className="p-1 rounded text-gray-400 hover:text-white hover:bg-gray-800 transition cursor-pointer"
                title={isMaximized ? 'Restore height' : 'Maximize console'}
              >
                {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>

              {/* Collapse button */}
              <button
                onClick={onToggleOpen}
                className="p-1 rounded text-gray-400 hover:text-white hover:bg-gray-800 transition cursor-pointer"
                title="Minimize console"
              >
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </>
          ) : (
            <button
              onClick={onToggleOpen}
              className="text-[11px] text-gray-400 hover:text-white px-2 py-0.5 rounded hover:bg-gray-800 transition cursor-pointer"
            >
              Open Console
            </button>
          )}
        </div>
      </div>

      {/* Main Console Content (Only when open) */}
      {isOpen && (
        <div className="flex-1 flex flex-col min-h-0 bg-[#0c1017]">
          {/* Scrollable Logs Output List */}
          <div
            ref={logsContainerRef}
            className="flex-1 overflow-y-auto overflow-x-hidden p-2 font-mono text-xs space-y-0.5 divide-y divide-gray-800/40"
          >
            {filteredLogs.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center p-4 text-center text-gray-500 select-none">
                <Terminal className="w-8 h-8 text-gray-700 mb-2" />
                <p className="text-xs font-medium text-gray-400">Virtual Console Active</p>
                <p className="text-[11px] text-gray-500 max-w-sm mt-0.5">
                  Code execution logs, warnings, and errors will appear here automatically. Type expressions below to evaluate them live.
                </p>
              </div>
            ) : (
              filteredLogs.map((log) => (
                <div
                  key={log.id}
                  className={`group flex items-start space-x-2 px-2 py-1 rounded-sm text-[12px] transition ${getLogRowStyle(
                    log.type
                  )}`}
                >
                  {/* Icon */}
                  {getLogIcon(log.type)}

                  {/* Timestamp */}
                  <span className="text-gray-500 text-[10px] shrink-0 select-none pt-0.5">
                    {log.time}
                  </span>

                  {/* Line info if available */}
                  {log.line && (
                    <span className="text-red-400/90 text-[10px] bg-red-950/60 px-1 rounded shrink-0 select-none pt-0.5">
                      line {log.line}{log.col ? `:${log.col}` : ''}
                    </span>
                  )}

                  {/* Message Content */}
                  <div className="flex-1 min-w-0 font-mono whitespace-pre-wrap break-all leading-relaxed">
                    {log.message}
                  </div>

                  {/* Copy single message button on hover */}
                  <button
                    onClick={() => handleCopyLog(log)}
                    className="opacity-0 group-hover:opacity-100 p-0.5 text-gray-500 hover:text-white transition shrink-0"
                    title="Copy message"
                  >
                    {copiedLogId === log.id ? (
                      <Check className="w-3 h-3 text-[#04AA6D]" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Interactive REPL Prompt Bar */}
          <form
            onSubmit={handleExecute}
            className="h-8 px-3 bg-[#111622] border-t border-gray-800 flex items-center space-x-2 shrink-0 select-none"
          >
            <span className="text-[#04AA6D] font-mono font-black text-sm select-none">&gt;</span>
            <input
              ref={replInputRef}
              type="text"
              value={replInput}
              onChange={(e) => setReplInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={
                language === 'python'
                  ? 'Evaluate expression or statement...'
                  : 'Evaluate JavaScript (e.g. document.title, 2+2, console.log("hi"))...'
              }
              className="flex-1 bg-transparent text-white placeholder-gray-500 font-mono text-xs outline-none"
            />
            {replInput && (
              <button
                type="submit"
                className="flex items-center space-x-1 px-2 py-0.5 rounded bg-[#04AA6D] hover:bg-[#03945f] text-white font-mono text-[11px] font-bold transition cursor-pointer shadow-xs"
              >
                <span>Run</span>
                <CornerDownLeft className="w-3 h-3" />
              </button>
            )}
          </form>
        </div>
      )}
    </div>
  );
};
