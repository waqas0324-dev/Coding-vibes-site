import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  Keyboard,
  Search,
  X,
  Compass,
  Code,
  GraduationCap,
  Sliders,
  Sparkles,
  Command,
  Check,
  Copy,
  ExternalLink,
  Laptop
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import {
  KEYBOARD_SHORTCUTS,
  SHORTCUT_CATEGORIES,
  KeyboardShortcut,
  ShortcutCategory
} from '../data/keyboardShortcuts';

export const KeyboardShortcutsModal: React.FC = () => {
  const {
    isKeyboardShortcutsOpen,
    closeKeyboardShortcuts,
    navigateTo,
    openAiMentor,
    toggleDarkMode,
    goBack
  } = useNavigation();

  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'navigation' | 'editor' | 'learning'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedCheatSheet, setCopiedCheatSheet] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Platform detection: default to Mac if macOS / iOS, otherwise Windows
  const [isMac, setIsMac] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
      return /Mac|iPod|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
    }
    return false;
  });

  // Focus search input when modal opens
  useEffect(() => {
    if (isKeyboardShortcutsOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 80);
    } else {
      setSearchQuery('');
      setActiveCategory('all');
    }
  }, [isKeyboardShortcutsOpen]);

  // Filter shortcuts by category and search query
  const filteredShortcuts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return KEYBOARD_SHORTCUTS.filter(shortcut => {
      const matchesCategory = activeCategory === 'all' || shortcut.category === activeCategory;
      if (!matchesCategory) return false;

      if (!q) return true;

      const inTitle = shortcut.title.toLowerCase().includes(q);
      const inDesc = shortcut.description.toLowerCase().includes(q);
      const inKeys = shortcut.keys.some(k => k.toLowerCase().includes(q));
      const inMacKeys = shortcut.macKeys?.some(k => k.toLowerCase().includes(q)) ?? false;
      const inBadge = shortcut.badge?.toLowerCase().includes(q) ?? false;

      return inTitle || inDesc || inKeys || inMacKeys || inBadge;
    });
  }, [activeCategory, searchQuery]);

  // Group filtered shortcuts by category when "all" is active and not searching
  const groupedShortcuts = useMemo(() => {
    if (activeCategory !== 'all' || searchQuery.trim() !== '') {
      return null;
    }

    const categories: Record<string, KeyboardShortcut[]> = {
      navigation: [],
      editor: [],
      learning: [],
      general: []
    };

    filteredShortcuts.forEach(s => {
      if (categories[s.category]) {
        categories[s.category].push(s);
      }
    });

    return categories;
  }, [activeCategory, searchQuery, filteredShortcuts]);

  if (!isKeyboardShortcutsOpen) {
    return null;
  }

  // Handle direct execution of shortcut actions from the modal
  const handleExecuteAction = (shortcut: KeyboardShortcut) => {
    closeKeyboardShortcuts();

    if (shortcut.actionRoute) {
      navigateTo(shortcut.actionRoute as any);
      return;
    }

    if (shortcut.actionType) {
      switch (shortcut.actionType) {
        case 'toggle-theme':
          toggleDarkMode();
          break;
        case 'open-ai-mentor':
          openAiMentor();
          break;
        case 'search':
          navigateTo('search');
          break;
        case 'go-back':
          goBack();
          break;
        default:
          break;
      }
    }
  };

  // Copy textual cheat sheet
  const handleCopyCheatSheet = () => {
    const text = KEYBOARD_SHORTCUTS.map(s => {
      const keys = (isMac && s.macKeys ? s.macKeys : s.keys).join(' + ');
      return `${s.title.padEnd(30)} [${keys}] - ${s.description}`;
    }).join('\n');

    navigator.clipboard.writeText(`Coding Vibes - Keyboard Shortcuts Cheat Sheet\n\n${text}`);
    setCopiedCheatSheet(true);
    setTimeout(() => setCopiedCheatSheet(false), 2000);
  };

  const getCategoryIcon = (catId: string) => {
    switch (catId) {
      case 'navigation':
        return <Compass className="w-4 h-4" />;
      case 'editor':
        return <Code className="w-4 h-4" />;
      case 'learning':
        return <GraduationCap className="w-4 h-4" />;
      case 'general':
        return <Sliders className="w-4 h-4" />;
      default:
        return <Command className="w-4 h-4" />;
    }
  };

  const getBadgeStyle = (badge?: string) => {
    switch (badge) {
      case 'Essential':
        return 'bg-emerald-50 dark:bg-emerald-950/50 text-[#04AA6D] dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40';
      case 'Pro':
        return 'bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/40';
      case 'Editor':
        return 'bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/40';
      case 'Quiz':
        return 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/40';
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700';
    }
  };

  // Render individual keycap
  const renderKeyCap = (keyStr: string, index: number) => {
    return (
      <kbd
        key={index}
        className="inline-flex items-center justify-center min-w-[26px] h-7 px-2 text-xs font-mono font-semibold text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-[#141d2e] border border-gray-300 dark:border-[#2d3748] border-b-2 rounded-md shadow-xs select-none transition-transform active:translate-y-0.5"
      >
        {keyStr}
      </kbd>
    );
  };

  // Render a list of keys for a shortcut
  const renderShortcutKeys = (shortcut: KeyboardShortcut) => {
    const keys = isMac && shortcut.macKeys ? shortcut.macKeys : shortcut.keys;
    return (
      <div className="flex items-center space-x-1 shrink-0">
        {keys.map((key, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span className="text-gray-400 dark:text-gray-500 text-xs font-bold">+</span>}
            {renderKeyCap(key, i)}
          </React.Fragment>
        ))}
      </div>
    );
  };

  // Render shortcut item row
  const renderShortcutRow = (shortcut: KeyboardShortcut) => {
    const isActionable = Boolean(shortcut.actionRoute || (shortcut.actionType && shortcut.actionType !== 'open-shortcuts'));

    return (
      <div
        key={shortcut.id}
        className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-white dark:bg-[#0c121e] border border-gray-200/80 dark:border-[#1e293b] hover:border-[#04AA6D]/50 dark:hover:border-[#04AA6D]/50 hover:shadow-xs transition-all duration-150 gap-3 group"
      >
        <div className="flex items-start space-x-3 min-w-0">
          <div className="pt-0.5 min-w-0">
            <div className="flex items-center space-x-2 flex-wrap gap-y-1">
              <span className="font-bold text-sm text-gray-900 dark:text-white">
                {shortcut.title}
              </span>
              {shortcut.badge && (
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${getBadgeStyle(shortcut.badge)}`}>
                  {shortcut.badge}
                </span>
              )}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-2">
              {shortcut.description}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 self-end sm:self-center shrink-0">
          {renderShortcutKeys(shortcut)}

          {isActionable && (
            <button
              onClick={() => handleExecuteAction(shortcut)}
              className="opacity-0 group-hover:opacity-100 sm:flex hidden items-center space-x-1 px-2 py-1 text-[11px] font-bold text-[#04AA6D] hover:bg-emerald-50 dark:hover:bg-emerald-950/40 rounded-lg border border-transparent hover:border-emerald-200 dark:hover:border-emerald-800/40 transition cursor-pointer"
              title={`Execute ${shortcut.title}`}
            >
              <span>Try</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={closeKeyboardShortcuts}
      role="dialog"
      aria-modal="true"
      aria-labelledby="keyboard-shortcuts-title"
    >
      <div
        className="w-full max-w-3xl max-h-[90vh] flex flex-col bg-white dark:bg-[#080d14] rounded-2xl border border-gray-200 dark:border-[#1e293b] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={e => e.stopPropagation()}
      >
        {/* TOP HEADER */}
        <div className="p-5 sm:p-6 border-b border-gray-100 dark:border-[#1e293b] flex items-center justify-between bg-gray-50/50 dark:bg-[#0c121e]/50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-[#04AA6D] flex items-center justify-center shadow-xs">
              <Keyboard className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 id="keyboard-shortcuts-title" className="text-lg sm:text-xl font-black text-gray-900 dark:text-white">
                  Keyboard Shortcuts
                </h2>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-bold rounded-full bg-gray-200/80 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  {KEYBOARD_SHORTCUTS.length} hotkeys
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                Navigate courses, manipulate code in the Tryit Editor, and control quizzes with ease.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Platform Toggle (Mac vs Windows) */}
            <div className="flex items-center bg-gray-100 dark:bg-[#141d2e] rounded-xl p-1 border border-gray-200 dark:border-[#1e293b]">
              <button
                onClick={() => setIsMac(true)}
                className={`px-2 py-1 text-xs font-semibold rounded-lg transition ${
                  isMac
                    ? 'bg-white dark:bg-[#080d14] text-gray-900 dark:text-white shadow-xs'
                    : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
                }`}
                title="Display Mac Command glyphs (⌘, ⌥, ⇧)"
              >
                Mac
              </button>
              <button
                onClick={() => setIsMac(false)}
                className={`px-2 py-1 text-xs font-semibold rounded-lg transition ${
                  !isMac
                    ? 'bg-white dark:bg-[#080d14] text-gray-900 dark:text-white shadow-xs'
                    : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
                }`}
                title="Display Windows / Linux keys (Ctrl, Alt)"
              >
                Win/Linux
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={closeKeyboardShortcuts}
              className="p-2 rounded-xl text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#141d2e] transition"
              title="Close (Esc)"
              aria-label="Close keyboard shortcuts dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* SEARCH AND CATEGORY CONTROLS */}
        <div className="p-4 sm:p-5 border-b border-gray-100 dark:border-[#1e293b] space-y-3 bg-white dark:bg-[#080d14]">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search shortcuts by name, action, or key (e.g. format, run, tryit, search, alt)..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-gray-50 dark:bg-[#141d2e] border border-gray-200 dark:border-[#1e293b] text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-hidden focus:border-[#04AA6D] transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-lg"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto pb-1 scrollbar-none">
            {SHORTCUT_CATEGORIES.map(cat => {
              const isActive = activeCategory === cat.id;
              const count = cat.id === 'all'
                ? KEYBOARD_SHORTCUTS.length
                : KEYBOARD_SHORTCUTS.filter(s => s.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                    isActive
                      ? 'bg-[#04AA6D] text-white shadow-xs'
                      : 'bg-gray-100 dark:bg-[#141d2e] text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#1a2538]'
                  }`}
                >
                  {getCategoryIcon(cat.id)}
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* SCROLLABLE SHORTCUTS LIST */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {filteredShortcuts.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-[#141d2e] text-gray-400 flex items-center justify-center mx-auto mb-3">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-800 dark:text-gray-200 text-sm">
                No shortcuts found for "{searchQuery}"
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Try searching for actions like "run", "format", "navigate", or "comment".
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="mt-4 px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-[#141d2e] text-xs font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                Reset Search
              </button>
            </div>
          ) : groupedShortcuts ? (
            /* GROUPED DISPLAY (When "All" is active and not searching) */
            <div className="space-y-6">
              {SHORTCUT_CATEGORIES.filter(c => c.id !== 'all').map(category => {
                const shortcuts = groupedShortcuts[category.id] || [];
                if (shortcuts.length === 0) return null;

                return (
                  <div key={category.id} className="space-y-2.5">
                    <div className="flex items-center space-x-2 pb-1 border-b border-gray-100 dark:border-[#1e293b]">
                      <div className="text-[#04AA6D]">
                        {getCategoryIcon(category.id)}
                      </div>
                      <h3 className="text-xs font-black uppercase tracking-wider text-gray-600 dark:text-gray-400">
                        {category.name}
                      </h3>
                      <span className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">
                        ({shortcuts.length})
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                      {shortcuts.map(renderShortcutRow)}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* FLAT FILTERED LIST (When a specific category or search query is active) */
            <div className="grid grid-cols-1 gap-2">
              {filteredShortcuts.map(renderShortcutRow)}
            </div>
          )}
        </div>

        {/* BOTTOM FOOTER / PRO-TIP & CHEAT SHEET COPY */}
        <div className="p-4 sm:p-5 border-t border-gray-100 dark:border-[#1e293b] bg-gray-50/70 dark:bg-[#0c121e]/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-center sm:text-left">
            <kbd className="px-2 py-1 rounded-md bg-white dark:bg-[#141d2e] border border-gray-200 dark:border-[#1e293b] font-mono text-[11px] font-bold text-gray-700 dark:text-gray-300 shadow-2xs">
              ?
            </kbd>
            <span>
              Press <strong className="text-gray-800 dark:text-gray-200 font-bold">?</strong> or{' '}
              <strong className="text-gray-800 dark:text-gray-200 font-bold">{isMac ? '⌘ /' : 'Ctrl /'}</strong> anytime to toggle this modal.
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyCheatSheet}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-[#141d2e] border border-gray-200 dark:border-[#1e293b] hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-200 text-xs font-semibold shadow-2xs transition cursor-pointer"
              title="Copy shortcuts cheat sheet as plain text"
            >
              {copiedCheatSheet ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-gray-400" />
                  <span>Copy Cheat Sheet</span>
                </>
              )}
            </button>

            <button
              onClick={closeKeyboardShortcuts}
              className="px-4 py-1.5 rounded-xl bg-[#04AA6D] hover:bg-[#03945f] text-white font-bold text-xs shadow-xs transition cursor-pointer"
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
