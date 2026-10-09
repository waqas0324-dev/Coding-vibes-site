import React, { useState, useRef, useEffect } from 'react';
import { useEditorTheme } from '../context/EditorThemeContext';
import { EditorTheme } from '../data/editorThemes';
import {
  Palette,
  Sun,
  Moon,
  Check,
  Search,
  Sparkles,
  X,
  ChevronDown,
  RotateCcw
} from 'lucide-react';

interface ThemeSwitcherProps {
  variant?: 'toolbar' | 'menu' | 'floating';
  className?: string;
  showLabel?: boolean;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  variant = 'toolbar',
  className = '',
  showLabel = true,
}) => {
  const {
    theme: activeTheme,
    themeId,
    mode,
    setThemeId,
    toggleMode,
    themes,
    darkThemes,
    lightThemes,
  } = useEditorTheme();

  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterMode, setFilterMode] = useState<'all' | 'dark' | 'light'>('all');
  const popoverRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close popover on click outside or Escape key
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
      // Focus search input after modal opens
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const filteredThemes = themes.filter(t => {
    const matchesFilter =
      filterMode === 'all' ? true : t.mode === filterMode;
    const matchesSearch =
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (t.author && t.author.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className={`relative inline-block text-left ${className}`} ref={popoverRef}>
      {/* TRIGGER BUTTON */}
      {variant === 'toolbar' && (
        <div className="flex items-center space-x-1">
          {/* Main Popover Trigger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 active:bg-white/25 text-white transition-all duration-150 border border-white/15 hover:border-white/30 text-xs font-semibold cursor-pointer shadow-xs group"
            title={`Active Theme: ${activeTheme.name} (${activeTheme.mode === 'dark' ? 'Dark' : 'Light'}) - Click to switch`}
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
            <Palette className="w-3.5 h-3.5 text-emerald-400 group-hover:rotate-12 transition-transform duration-200" />
            
            {showLabel && (
              <span className="hidden sm:inline font-mono text-xs font-bold text-gray-200">
                {activeTheme.name}
              </span>
            )}

            {/* 4-Color Swatch Dots Preview */}
            <div className="flex items-center -space-x-1 pl-1">
              {activeTheme.colors.swatches.map((color, idx) => (
                <span
                  key={idx}
                  className="w-2.5 h-2.5 rounded-full border border-black/30 shadow-xs"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Quick Sun/Moon Toggle Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggleMode();
            }}
            className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-all duration-150 border border-white/10 hover:border-white/25 cursor-pointer"
            title={`Toggle between dark and light (${mode === 'dark' ? 'Switch to Light' : 'Switch to Dark'})`}
            aria-label="Toggle Dark or Light theme"
          >
            {mode === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-300" />
            )}
          </button>
        </div>
      )}

      {/* MENU VARIANT (for hamburger menu) */}
      {variant === 'menu' && (
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm cursor-pointer text-left"
        >
          <div className="flex items-center space-x-3">
            <Palette className="w-4 h-4 text-[#04AA6D]" />
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">Editor Theme</div>
              <div className="text-[11px] text-gray-500 font-mono">
                {activeTheme.name} ({activeTheme.mode})
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-1.5">
            <div className="flex items-center -space-x-1">
              {activeTheme.colors.swatches.map((color, idx) => (
                <span
                  key={idx}
                  className="w-2 h-2 rounded-full border border-black/20"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </div>
        </button>
      )}

      {/* FLOATING VARIANT */}
      {variant === 'floating' && (
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-[#141d2e] hover:bg-[#1a253a] text-white border border-[#1e293b] text-xs font-semibold cursor-pointer shadow-lg"
        >
          <Palette className="w-3.5 h-3.5 text-[#22c55e]" />
          <span>{activeTheme.name}</span>
        </button>
      )}

      {/* THEME SELECTOR POPOVER MODAL */}
      {isOpen && (
        <div
          className="absolute right-0 top-full mt-2 w-80 sm:w-96 max-w-[95vw] bg-[#121824] text-gray-100 rounded-2xl shadow-2xl border border-[#233149] p-3.5 z-50 animate-in fade-in zoom-in-95 duration-150 backdrop-blur-md"
          role="dialog"
          aria-label="Syntax Theme Switcher"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#233149]">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 rounded-lg bg-[#22c55e]/15 text-[#22c55e]">
                <Palette className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white flex items-center space-x-1.5">
                  <span>Syntax Theme</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-[#22c55e]/20 text-[#22c55e] font-semibold">
                    Live
                  </span>
                </h3>
                <p className="text-[11px] text-gray-400">
                  Select syntax colors for the Tryit code editor
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
              aria-label="Close theme selector"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Search Box */}
          <div className="mt-3 relative">
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search themes (Dracula, Monokai, GitHub...)"
              className="w-full bg-[#0a0f18] border border-[#233149] rounded-xl pl-8 pr-3 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#22c55e] font-mono transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Filter Pills (All / Dark / Light) */}
          <div className="mt-2.5 flex items-center justify-between gap-1 bg-[#0a0f18] p-1 rounded-xl border border-[#233149]">
            <button
              onClick={() => setFilterMode('all')}
              className={`flex-1 py-1 rounded-lg text-[11px] font-semibold transition cursor-pointer ${
                filterMode === 'all'
                  ? 'bg-[#22c55e] text-black shadow-xs'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              All ({themes.length})
            </button>
            <button
              onClick={() => setFilterMode('dark')}
              className={`flex-1 py-1 rounded-lg text-[11px] font-semibold flex items-center justify-center space-x-1 transition cursor-pointer ${
                filterMode === 'dark'
                  ? 'bg-[#22c55e] text-black shadow-xs'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Moon className="w-3 h-3" />
              <span>Dark ({darkThemes.length})</span>
            </button>
            <button
              onClick={() => setFilterMode('light')}
              className={`flex-1 py-1 rounded-lg text-[11px] font-semibold flex items-center justify-center space-x-1 transition cursor-pointer ${
                filterMode === 'light'
                  ? 'bg-[#22c55e] text-black shadow-xs'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Sun className="w-3 h-3" />
              <span>Light ({lightThemes.length})</span>
            </button>
          </div>

          {/* THEMES LIST WITH LIVE COLOR PREVIEW MOCKUPS */}
          <div className="mt-3 max-h-72 overflow-y-auto pr-1 space-y-2 custom-scrollbar">
            {filteredThemes.length === 0 ? (
              <div className="py-8 text-center text-gray-400 text-xs">
                No themes match "{searchQuery}"
              </div>
            ) : (
              filteredThemes.map((item: EditorTheme) => {
                const isSelected = item.id === themeId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setThemeId(item.id);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left p-2.5 rounded-xl border transition-all duration-150 flex flex-col gap-1.5 cursor-pointer group ${
                      isSelected
                        ? 'bg-[#1b263b] border-[#22c55e] shadow-md shadow-[#22c55e]/10'
                        : 'bg-[#0e1420] hover:bg-[#151e2e] border-[#1e2a3f] hover:border-gray-600'
                    }`}
                  >
                    {/* Top Row: Name, Author, Mode, Checkmark */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-xs text-white group-hover:text-[#22c55e] transition-colors">
                          {item.name}
                        </span>
                        {item.author && (
                          <span className="text-[10px] text-gray-400 font-mono">
                            by {item.author}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center space-x-2">
                        <span
                          className={`text-[9px] font-mono px-1.5 py-0.5 rounded uppercase tracking-wider font-semibold ${
                            item.mode === 'dark'
                              ? 'bg-indigo-950 text-indigo-300 border border-indigo-800'
                              : 'bg-amber-950 text-amber-300 border border-amber-800'
                          }`}
                        >
                          {item.mode}
                        </span>
                        {isSelected && (
                          <span className="p-0.5 rounded-full bg-[#22c55e] text-black">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Middle Row: Description */}
                    <p className="text-[11px] text-gray-400 line-clamp-1">
                      {item.description}
                    </p>

                    {/* Bottom Row: Realistic Code Preview Strip */}
                    <div
                      className="rounded-lg px-2.5 py-1.5 text-[11px] font-mono flex items-center justify-between border shadow-inner overflow-hidden"
                      style={{
                        backgroundColor: item.colors.bg,
                        borderColor: item.colors.gutterBorder,
                      }}
                    >
                      <div className="flex items-center space-x-1 select-none overflow-hidden text-ellipsis whitespace-nowrap">
                        <span style={{ color: item.tokens.keyword, fontWeight: 600 }}>const</span>
                        <span style={{ color: item.tokens.variable }}>vibe</span>
                        <span style={{ color: item.tokens.operator }}>=</span>
                        <span style={{ color: item.tokens.string }}>"code"</span>
                        <span style={{ color: item.tokens.punctuation }}>;</span>
                      </div>

                      {/* Swatch dots */}
                      <div className="flex items-center -space-x-1 shrink-0 ml-2">
                        {item.colors.swatches.map((hex, i) => (
                          <span
                            key={i}
                            className="w-2.5 h-2.5 rounded-full border border-black/30 shadow-xs"
                            style={{ backgroundColor: hex }}
                            title={hex}
                          />
                        ))}
                      </div>
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Footer Quick Action */}
          <div className="mt-3 pt-2.5 border-t border-[#233149] flex items-center justify-between text-[11px] text-gray-400">
            <button
              onClick={() => {
                setThemeId('dracula');
              }}
              className="flex items-center space-x-1 hover:text-white transition cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset to Dracula</span>
            </button>

            <span className="font-mono text-[10px] text-gray-400">
              Persisted in storage
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
