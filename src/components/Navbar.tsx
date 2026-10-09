import React, { useState, useRef, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { useAuth } from '../context/AuthContext';
import { useLearning } from '../context/LearningContext';
import { NetworkStatusIndicator, NetworkStatusBanner } from './NetworkStatusIndicator';
import {
  Menu,
  Search,
  X,
  LogIn,
  User,
  ChevronDown,
  ChevronRight,
  Code2,
  Sparkles,
  Award,
  BookOpen,
  HelpCircle,
  Play,
  Moon,
  Sun,
  Laptop,
  CheckCircle,
  FolderGit2,
  ExternalLink,
  Layers,
  GraduationCap,
  Terminal,
  Database,
  Compass,
  ArrowRight,
  FileCode,
  Palette,
  Trophy,
  Keyboard,
  Bookmark
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    currentRoute,
    params,
    navigateTo,
    toggleSidebar,
    setIsSidebarOpen,
    isDarkMode,
    toggleDarkMode,
    openAiMentor,
    openKeyboardShortcuts
  } = useNavigation();

  const { user, isAuthenticated, openAuthModal, signOut } = useAuth();
  const { unlockedBadgesCount, totalBookmarksCount } = useLearning();

  const [isW3MenuOpen, setIsW3MenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>('tutorials');
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Close menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsW3MenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // W3Schools Sub-nav Languages
  const subNavLanguages = [
    { label: 'HTML', courseSlug: 'html', lessonSlug: 'introduction-to-html' },
    { label: 'CSS', courseSlug: 'css', lessonSlug: 'introduction-to-css' },
    { label: 'JAVASCRIPT', courseSlug: 'javascript', lessonSlug: 'introduction-to-javascript' },
    { label: 'SQL', courseSlug: 'sql', lessonSlug: 'introduction-to-sql' },
    { label: 'PYTHON', courseSlug: 'python', lessonSlug: 'introduction-to-python' },
    { label: 'JAVA', courseSlug: 'java', lessonSlug: 'introduction-to-java' },
    { label: 'PHP', courseSlug: 'php', lessonSlug: 'introduction-to-php' },
    { label: 'HOW TO', courseSlug: 'howto', lessonSlug: 'how-to-create-a-website' },
    { label: 'W3.CSS', courseSlug: 'w3css', lessonSlug: 'introduction-to-w3css' },
    { label: 'C', courseSlug: 'c', lessonSlug: 'introduction-to-c' },
    { label: 'C++', courseSlug: 'cpp', lessonSlug: 'introduction-to-cpp' },
    { label: 'C#', courseSlug: 'csharp', lessonSlug: 'introduction-to-csharp' },
    { label: 'BOOTSTRAP', courseSlug: 'bootstrap', lessonSlug: 'introduction-to-bootstrap' },
    { label: 'REACT', courseSlug: 'react-js', lessonSlug: 'introduction-to-react' },
    { label: 'MYSQL', courseSlug: 'sql', lessonSlug: 'introduction-to-sql' },
    { label: 'JQUERY', courseSlug: 'javascript', lessonSlug: 'introduction-to-javascript' },
    { label: 'EXCEL', route: 'courses', filter: 'Excel' },
    { label: 'XML', courseSlug: 'html', lessonSlug: 'introduction-to-html' },
    { label: 'DJANGO', courseSlug: 'python', lessonSlug: 'introduction-to-python' },
    { label: 'NUMPY', courseSlug: 'python', lessonSlug: 'introduction-to-python' },
    { label: 'PANDAS', courseSlug: 'python', lessonSlug: 'introduction-to-python' },
    { label: 'NODEJS', courseSlug: 'node-js' }
  ];

  const handleSubNavClick = (item: typeof subNavLanguages[0]) => {
    if (item.courseSlug) {
      navigateTo('lesson', {
        courseSlug: item.courseSlug,
        lessonSlug: item.lessonSlug || ''
      });
      setIsSidebarOpen(true);
    } else if (item.route) {
      navigateTo(item.route as any);
    }
  };

  const handleHamburgerClick = () => {
    if (currentRoute === 'lesson') {
      toggleSidebar();
    } else {
      navigateTo('lesson', { courseSlug: 'html', lessonSlug: 'introduction-to-html' });
      setIsSidebarOpen(true);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsW3MenuOpen(false);
      navigateTo('search', { searchQuery: searchQuery.trim() });
    }
  };

  const activeLanguage = params.courseSlug?.toUpperCase() || (currentRoute === 'lesson' ? 'HTML' : '');

  return (
    <header className="sticky top-0 z-40 w-full select-none shadow-xs">
      {/* 1. TOP MAIN NAVBAR (Authentic W3Schools Light Styling) */}
      <div className="w-full bg-white dark:bg-[#0c121e] border-b border-gray-200 dark:border-[#1e293b] px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-3 transition-colors">
        {/* Left Side: Brand Logo & Green Menu Button */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Logo */}
          <div
            onClick={() => {
              setIsW3MenuOpen(false);
              setIsProfileDropdownOpen(false);
              navigateTo('home');
            }}
            className="flex items-center space-x-2 cursor-pointer group shrink-0 pr-1 sm:pr-2"
          >
            <div className="w-9 h-9 rounded-lg bg-[#04AA6D] flex items-center justify-center text-white font-mono font-extrabold text-lg shadow-sm">
              &lt;&gt;
            </div>
            <div className="flex items-baseline space-x-1">
              <span className="font-extrabold text-lg tracking-tight text-[#282A35] dark:text-white">
                Coding
              </span>
              <span className="font-extrabold text-lg tracking-tight text-[#04AA6D]">
                Vibes
              </span>
            </div>
          </div>

          {/* Green Menu Button (Matches Screenshot 2) */}
          <button
            onClick={() => setIsW3MenuOpen(prev => !prev)}
            className="flex items-center space-x-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-md bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold text-xs sm:text-sm transition shadow-xs"
            aria-label="Open Navigation Menu"
          >
            <span>Menu</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isW3MenuOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Center / Right: Search, Theme Toggle, Auth */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Search input */}
          <form onSubmit={handleSearchSubmit} className="relative hidden md:block">
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search our tutorials, e.g. HTML"
              className="w-48 lg:w-72 pl-9 pr-4 py-1.5 rounded-full bg-gray-100 dark:bg-[#141d2e] border border-gray-300 dark:border-[#1e293b] text-xs text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:border-[#04AA6D] transition"
            />
            <Search className="w-3.5 h-3.5 text-gray-500 absolute left-3 top-2.5" />
          </form>

          {/* Mobile Search button */}
          <button
            onClick={() => navigateTo('search')}
            className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#141d2e] transition"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Badges / Student Dashboard Button */}
          <button
            onClick={() => navigateTo('profile')}
            className="flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900/50 border border-amber-300 dark:border-amber-700/60 font-bold text-xs shadow-xs transition active:scale-95 cursor-pointer"
            title="View Badges & Learning Dashboard"
          >
            <Trophy className="w-3.5 h-3.5 text-amber-500 fill-amber-400 shrink-0" />
            <span className="hidden sm:inline">Badges</span>
            <span className="px-1.5 py-0.2 rounded-full bg-amber-200/70 dark:bg-amber-800/70 text-[10px] font-mono font-black">
              {unlockedBadgesCount}
            </span>
          </button>

          {/* AI Mentor Button with Voice & Screenshot Support */}
          <button
            onClick={() => openAiMentor()}
            className="flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-[#04AA6D] dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 border border-emerald-300 dark:border-emerald-700/60 font-bold text-xs shadow-xs transition active:scale-95 cursor-pointer"
            title="Ask AI Coding Mentor (Voice, Urdu & Screenshot assistance)"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#04AA6D]" />
            <span className="font-extrabold tracking-tight">AI Mentor</span>
          </button>

          {/* Theme Switcher Button (Sun / Moon) */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#141d2e] transition cursor-pointer"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-gray-700" />}
          </button>

          {/* Keyboard Shortcuts Overlay Launcher */}
          <button
            onClick={openKeyboardShortcuts}
            className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#141d2e] transition cursor-pointer hidden xs:flex sm:flex items-center justify-center"
            title="Keyboard Shortcuts (? or Ctrl+/)"
            aria-label="Open Keyboard Shortcuts"
          >
            <Keyboard className="w-4 h-4" />
          </button>

          {/* Network Connection Status Indicator */}
          <NetworkStatusIndicator />

          {/* Auth / Sign In Button */}
          {isAuthenticated && user ? (
            <div className="relative">
              <button
                onClick={() => setIsProfileDropdownOpen(prev => !prev)}
                className="flex items-center space-x-2 p-1 pl-2.5 rounded-full bg-gray-100 dark:bg-[#141d2e] border border-gray-300 dark:border-[#1e293b] hover:border-[#04AA6D] transition"
              >
                <span className="text-xs font-medium text-gray-700 dark:text-gray-200 max-w-[90px] truncate hidden sm:inline">
                  {user.name}
                </span>
                <div className="w-7 h-7 rounded-full bg-[#04AA6D] text-white flex items-center justify-center font-bold text-xs">
                  {user.avatarUrl ? (
                    <img src={user.avatarUrl} alt={user.name} className="w-full h-full rounded-full object-cover" />
                  ) : (
                    user.name.charAt(0).toUpperCase()
                  )}
                </div>
              </button>

              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white dark:bg-[#0c121e] border border-gray-200 dark:border-[#1e293b] shadow-xl py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-200 dark:border-[#1e293b]">
                    <p className="text-xs font-semibold text-gray-900 dark:text-white">{user.name}</p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate">{user.email}</p>
                  </div>
                  <button
                    onClick={() => {
                      setIsProfileDropdownOpen(false);
                      navigateTo('profile');
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1e293b] flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-2">
                      <Trophy className="w-3.5 h-3.5 text-amber-500" />
                      <span>Badges & Dashboard</span>
                    </div>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 font-bold">
                      {unlockedBadgesCount}
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      setIsProfileDropdownOpen(false);
                      navigateTo('profile');
                      setTimeout(() => {
                        const el = document.getElementById('saved-for-later-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1e293b] flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-2">
                      <Bookmark className="w-3.5 h-3.5 text-[#04AA6D]" />
                      <span>Saved for Later</span>
                    </div>
                    {totalBookmarksCount > 0 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-[#04AA6D] dark:text-emerald-400 font-bold">
                        {totalBookmarksCount}
                      </span>
                    )}
                  </button>
                  <button
                    onClick={() => {
                      setIsProfileDropdownOpen(false);
                      navigateTo('profile');
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1e293b] flex items-center space-x-2"
                  >
                    <User className="w-3.5 h-3.5 text-[#04AA6D]" />
                    <span>My Profile & Settings</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsProfileDropdownOpen(false);
                      openKeyboardShortcuts();
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1e293b] flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-2">
                      <Keyboard className="w-3.5 h-3.5 text-gray-400" />
                      <span>Keyboard Shortcuts</span>
                    </div>
                    <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 font-bold border border-gray-200 dark:border-gray-700">?</kbd>
                  </button>
                  <button
                    onClick={() => {
                      setIsProfileDropdownOpen(false);
                      signOut();
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 flex items-center space-x-2"
                  >
                    <LogIn className="w-3.5 h-3.5 rotate-180" />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => openAuthModal('signin')}
              className="px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-[#04AA6D] hover:bg-[#03945f] text-white font-bold text-xs sm:text-sm transition duration-200 shadow-sm"
            >
              Sign in
            </button>
          )}
        </div>
      </div>

      {/* 2. SUB-NAVBAR WITH HAMBURGER BUTTON ON FAR LEFT & TOPIC TABS */}
      <nav
        aria-label="Topic Subnavigation"
        className="w-full bg-[#282A35] text-white flex items-center overflow-x-auto scrollbar-none border-t border-[#1f2029]"
      >
        {/* W3Schools Iconic Hamburger Button on FAR LEFT: Toggles Sidebar! */}
        <button
          onClick={handleHamburgerClick}
          className="h-10 px-3.5 sm:px-4 bg-[#1e2029] hover:bg-[#04AA6D] text-white font-bold text-base flex items-center justify-center shrink-0 border-r border-[#3a3d4a] transition"
          title="Toggle Curriculum Sidebar"
          aria-label="Toggle Curriculum Sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Scrollable Language Topics */}
        <div className="flex items-center space-x-0.5 sm:space-x-1 py-1 px-1 whitespace-nowrap min-w-max text-xs sm:text-xs font-bold tracking-wide">
          {subNavLanguages.map(item => {
            const isSelected = activeLanguage === item.label;
            return (
              <button
                key={item.label}
                onClick={() => handleSubNavClick(item)}
                className={`px-3 py-1.5 rounded transition font-semibold ${
                  isSelected
                    ? 'bg-[#04AA6D] text-white font-extrabold shadow-sm'
                    : 'text-gray-200 hover:text-white hover:bg-[#1a1b22]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Network Offline / Connection Lost Banner */}
      <NetworkStatusBanner />

      {/* 3. W3SCHOOLS FULL MEGA MENU OVERLAY (Clean Structured Mega-Menu) */}
      {isW3MenuOpen && (
        <div 
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsW3MenuOpen(false);
          }}
          className="fixed inset-0 top-14 sm:top-16 z-50 bg-black/60 backdrop-blur-xs flex flex-col justify-start overflow-y-auto animate-in fade-in duration-150"
        >
          <div className="w-full max-w-7xl mx-auto bg-white dark:bg-[#0c121e] border-b border-x border-gray-200 dark:border-[#1e293b] shadow-2xl rounded-b-2xl overflow-hidden">
            {/* Top Toolbar: Dark Mode & Close Button */}
            <div className="flex flex-wrap items-center justify-between px-5 sm:px-8 py-3.5 border-b border-gray-200 dark:border-[#1e293b] bg-gray-50 dark:bg-[#080d14] gap-3">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#04AA6D]"></span>
                <span className="text-sm font-extrabold text-gray-900 dark:text-white">
                  Coding Vibes Tutorials &amp; References
                </span>
              </div>

              <div className="flex items-center space-x-4">
                {/* Dark Mode Switch */}
                <div className="flex items-center space-x-2 bg-white dark:bg-[#141d2e] px-3 py-1 rounded-full border border-gray-200 dark:border-[#1e293b]">
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Dark mode</span>
                  <button
                    onClick={toggleDarkMode}
                    className={`w-10 h-5 flex items-center rounded-full p-0.5 cursor-pointer transition-colors ${
                      isDarkMode ? 'bg-[#04AA6D] justify-end' : 'bg-gray-300 justify-start'
                    }`}
                    aria-label="Toggle dark mode"
                  >
                    <div className="w-4 h-4 rounded-full bg-white shadow-md flex items-center justify-center">
                      {isDarkMode ? <Moon className="w-2.5 h-2.5 text-[#04AA6D]" /> : <Sun className="w-2.5 h-2.5 text-amber-500" />}
                    </div>
                  </button>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setIsW3MenuOpen(false)}
                  className="p-1.5 px-3 rounded-md bg-gray-200 dark:bg-[#1e293b] text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-300 transition flex items-center space-x-1.5 font-bold text-xs"
                  aria-label="Close menu"
                >
                  <span>Close</span>
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Main 4-Column Directory Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5 sm:px-8 py-6 max-h-[55vh] overflow-y-auto">
              {/* Column 1: Frontend Web Development */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-[#04AA6D] border-b border-gray-200 dark:border-[#1e293b] pb-2">
                  <BookOpen className="w-4 h-4 stroke-[2.5]" />
                  <h4 className="font-extrabold text-xs uppercase tracking-wider text-gray-900 dark:text-white">
                    Frontend Tutorials
                  </h4>
                </div>
                <div className="space-y-1">
                  <button
                    onClick={() => {
                      setIsW3MenuOpen(false);
                      navigateTo('lesson', { courseSlug: 'html', lessonSlug: 'introduction-to-html' });
                      setIsSidebarOpen(true);
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-[#062419] transition flex items-center justify-between group"
                  >
                    <span className="text-xs font-bold text-gray-800 dark:text-gray-200 group-hover:text-[#04AA6D]">
                      HTML Tutorial
                    </span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 px-1.5 py-0.5 rounded font-mono font-bold">
                      Essential
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      setIsW3MenuOpen(false);
                      navigateTo('lesson', { courseSlug: 'css', lessonSlug: 'introduction-to-css' });
                      setIsSidebarOpen(true);
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#141d2e] transition flex items-center justify-between group"
                  >
                    <span className="text-xs font-bold text-gray-800 dark:text-gray-200 group-hover:text-[#04AA6D]">
                      CSS Tutorial
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono">Styling</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsW3MenuOpen(false);
                      navigateTo('lesson', { courseSlug: 'javascript', lessonSlug: 'introduction-to-javascript' });
                      setIsSidebarOpen(true);
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#141d2e] transition flex items-center justify-between group"
                  >
                    <span className="text-xs font-bold text-gray-800 dark:text-gray-200 group-hover:text-[#04AA6D]">
                      JavaScript Tutorial
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono">Interactivity</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsW3MenuOpen(false);
                      navigateTo('lesson', { courseSlug: 'react-js', lessonSlug: 'introduction-to-react' });
                      setIsSidebarOpen(true);
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#141d2e] transition flex items-center justify-between group"
                  >
                    <span className="text-xs font-bold text-gray-800 dark:text-gray-200 group-hover:text-[#04AA6D]">
                      React JS Library
                    </span>
                    <span className="text-[10px] bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 px-1.5 py-0.5 rounded font-mono font-bold">
                      Popular
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      setIsW3MenuOpen(false);
                      navigateTo('lesson', { courseSlug: 'bootstrap', lessonSlug: 'introduction-to-bootstrap' });
                      setIsSidebarOpen(true);
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#141d2e] transition flex items-center justify-between group"
                  >
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-[#04AA6D]">
                      Bootstrap 5
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">Framework</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsW3MenuOpen(false);
                      navigateTo('lesson', { courseSlug: 'howto', lessonSlug: 'how-to-create-a-website' });
                      setIsSidebarOpen(true);
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#141d2e] transition flex items-center justify-between group"
                  >
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-[#04AA6D]">
                      W3.CSS &amp; How-To Guides
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">Snippets</span>
                  </button>
                </div>
              </div>

              {/* Column 2: Backend & Data Management */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sky-500 border-b border-gray-200 dark:border-[#1e293b] pb-2">
                  <Database className="w-4 h-4 stroke-[2.5]" />
                  <h4 className="font-extrabold text-xs uppercase tracking-wider text-gray-900 dark:text-white">
                    Backend &amp; Programming
                  </h4>
                </div>
                <div className="space-y-1">
                  <button
                    onClick={() => {
                      setIsW3MenuOpen(false);
                      navigateTo('lesson', { courseSlug: 'python', lessonSlug: 'introduction-to-python' });
                      setIsSidebarOpen(true);
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#141d2e] transition flex items-center justify-between group"
                  >
                    <span className="text-xs font-bold text-gray-800 dark:text-gray-200 group-hover:text-sky-500">
                      Python Tutorial
                    </span>
                    <span className="text-[10px] bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 px-1.5 py-0.5 rounded font-mono font-bold">
                      Hot
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      setIsW3MenuOpen(false);
                      navigateTo('lesson', { courseSlug: 'sql', lessonSlug: 'introduction-to-sql' });
                      setIsSidebarOpen(true);
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#141d2e] transition flex items-center justify-between group"
                  >
                    <span className="text-xs font-bold text-gray-800 dark:text-gray-200 group-hover:text-sky-500">
                      SQL Database Tutorial
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono">Queries</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsW3MenuOpen(false);
                      navigateTo('course-detail', { courseSlug: 'node-js' });
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#141d2e] transition flex items-center justify-between group"
                  >
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-sky-500">
                      Node.js Runtime
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">Backend</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsW3MenuOpen(false);
                      navigateTo('course-detail', { courseSlug: 'git-github' });
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#141d2e] transition flex items-center justify-between group"
                  >
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-sky-500">
                      Git &amp; GitHub
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">Git Flow</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsW3MenuOpen(false);
                      navigateTo('lesson', { courseSlug: 'java', lessonSlug: 'introduction-to-java' });
                      setIsSidebarOpen(true);
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#141d2e] transition flex items-center justify-between group"
                  >
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-sky-500">
                      Java &amp; C++ Programming
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">OOP</span>
                  </button>
                </div>
              </div>

              {/* Column 3: Exercises & Interactive Practice */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-amber-500 border-b border-gray-200 dark:border-[#1e293b] pb-2">
                  <Play className="w-4 h-4 stroke-[2.5]" />
                  <h4 className="font-extrabold text-xs uppercase tracking-wider text-gray-900 dark:text-white">
                    Practice &amp; Sandboxes
                  </h4>
                </div>
                <div className="space-y-1">
                  <button
                    onClick={() => {
                      setIsW3MenuOpen(false);
                      navigateTo('practice');
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-950/40 transition flex items-center justify-between group"
                  >
                    <span className="text-xs font-bold text-gray-800 dark:text-gray-200 group-hover:text-amber-500">
                      Try-it-Yourself Sandbox
                    </span>
                    <span className="text-[10px] bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200 px-1.5 py-0.5 rounded font-mono font-bold">
                      Run Live
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      setIsW3MenuOpen(false);
                      navigateTo('practice');
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#141d2e] transition flex items-center justify-between group"
                  >
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-amber-500">
                      HTML &amp; CSS Quizzes
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">Tests</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsW3MenuOpen(false);
                      navigateTo('practice');
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#141d2e] transition flex items-center justify-between group"
                  >
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-amber-500">
                      JavaScript Challenges
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">Code</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsW3MenuOpen(false);
                      navigateTo('courses');
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#141d2e] transition flex items-center justify-between group"
                  >
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-amber-500">
                      Guided Web Projects
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">Portfolio</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsW3MenuOpen(false);
                      navigateTo('courses');
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#141d2e] transition flex items-center justify-between group"
                  >
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-amber-500">
                      Official Certificates
                    </span>
                    <span className="text-[10px] bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 px-1.5 py-0.5 rounded font-mono font-bold">
                      Certify
                    </span>
                  </button>
                </div>
              </div>

              {/* Column 4: References & Cheat Sheets */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-indigo-500 border-b border-gray-200 dark:border-[#1e293b] pb-2">
                  <Layers className="w-4 h-4 stroke-[2.5]" />
                  <h4 className="font-extrabold text-xs uppercase tracking-wider text-gray-900 dark:text-white">
                    References &amp; Docs
                  </h4>
                </div>
                <div className="space-y-1">
                  <button
                    onClick={() => {
                      setIsW3MenuOpen(false);
                      navigateTo('resources');
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#141d2e] transition flex items-center justify-between group"
                  >
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-500">
                      HTML Tag Reference
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">Tags</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsW3MenuOpen(false);
                      navigateTo('resources');
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#141d2e] transition flex items-center justify-between group"
                  >
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-500">
                      CSS Properties Guide
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">CSS3</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsW3MenuOpen(false);
                      navigateTo('resources');
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#141d2e] transition flex items-center justify-between group"
                  >
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-500">
                      JavaScript Methods
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">Cheatsheet</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsW3MenuOpen(false);
                      navigateTo('resources');
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#141d2e] transition flex items-center justify-between group"
                  >
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-500">
                      HTML Color Picker &amp; Hex
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">Palette</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsW3MenuOpen(false);
                      navigateTo('resources');
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#141d2e] transition flex items-center justify-between group"
                  >
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-500">
                      SQL Commands Reference
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">Syntax</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Menu Footer */}
            <div className="px-5 sm:px-8 py-3.5 border-t border-gray-200 dark:border-[#1e293b] bg-gray-50 dark:bg-[#080d14] flex flex-wrap items-center justify-between text-xs text-gray-600 dark:text-gray-400 gap-3">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-800 dark:text-gray-200">Coding Vibes Pro Tip:</span>
                <span>Press <kbd className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-800 font-mono text-[10px]">ESC</kbd> to dismiss this menu anytime.</span>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => {
                    setIsW3MenuOpen(false);
                    navigateTo('practice');
                  }}
                  className="font-bold text-[#04AA6D] hover:underline"
                >
                  Open Code Sandbox &raquo;
                </button>
                <button
                  onClick={() => setIsW3MenuOpen(false)}
                  className="hover:text-gray-900 dark:hover:text-white transition"
                >
                  Close Menu
                </button>
              </div>
            </div>
          </div>

          {/* Dismiss backdrop */}
          <div className="flex-1 min-h-[40px]" onClick={() => setIsW3MenuOpen(false)} />
        </div>
      )}
    </header>
  );
};
