import React, { createContext, useContext, useState, useEffect } from 'react';

export type AppRoute = 
  | 'home'
  | 'tutorials'
  | 'courses'
  | 'practice'
  | 'projects'
  | 'resources'
  | 'search'
  | 'course-detail'
  | 'lesson'
  | 'project-detail'
  | 'profile'
  | 'dashboard'
  | 'settings'
  | 'tag-reference'
  | 'tryit'
  | 'studio'
  | 'setup-guide'
  | 'roadmaps'
  | 'roadmap-detail';

interface NavigationParams {
  courseSlug?: string;
  moduleIndex?: number;
  lessonSlug?: string;
  tagSlug?: string;
  projectId?: string;
  roadmapId?: string;
  searchQuery?: string;
  categoryFilter?: string;
  editorCode?: string;
  editorLanguage?: string;
  editorTitle?: string;
  returnRoute?: AppRoute;
  returnParams?: NavigationParams;
}

export interface HistoryItem {
  route: AppRoute;
  params: NavigationParams;
  timestamp: number;
}

export interface LastVisitedLessonInfo {
  courseSlug: string;
  lessonSlug: string;
  title?: string;
  courseTitle?: string;
  timestamp: number;
}

interface NavigationContextType {
  currentRoute: AppRoute;
  params: NavigationParams;
  navigateTo: (route: AppRoute, newParams?: NavigationParams) => void;
  openTryit: (code: string, language?: string, title?: string) => void;
  goBack: () => void;
  canGoBack: boolean;
  historyStack: HistoryItem[];
  lastVisitedLesson: LastVisitedLessonInfo | null;
  resumeLastLesson: () => void;
  setLastVisitedLessonInfo: (info: LastVisitedLessonInfo) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSidebar: () => void;
  openSearchWithQuery: (q?: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isAiMentorOpen: boolean;
  openAiMentor: (code?: string, lessonTitle?: string, language?: string) => void;
  closeAiMentor: () => void;
  aiMentorInitialCode: string;
  aiMentorLessonTitle: string;
  aiMentorLanguage: string;
  isKeyboardShortcutsOpen: boolean;
  openKeyboardShortcuts: () => void;
  closeKeyboardShortcuts: () => void;
  toggleKeyboardShortcuts: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(() => {
    try {
      const hash = window.location.hash.replace(/^#\/?/, '');
      const parts = hash.split('?')[0].split('/');
      const section = parts[0];
      if (section === 'tryit') return 'tryit';
      if (section === 'studio') return 'studio';
    } catch {}
    // Always start at Home Page by default as requested
    return 'home';
  });
  const [params, setParams] = useState<NavigationParams>({});
  const [historyStack, setHistoryStack] = useState<HistoryItem[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [lastVisitedLesson, setLastVisitedLesson] = useState<LastVisitedLessonInfo | null>(() => {
    try {
      const raw = localStorage.getItem('codingvibes_last_lesson');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('codingvibes_theme') === 'dark';
  });

  const [isAiMentorOpen, setIsAiMentorOpen] = useState(false);
  const [aiMentorInitialCode, setAiMentorInitialCode] = useState('');
  const [aiMentorLessonTitle, setAiMentorLessonTitle] = useState('HTML Tutorial');
  const [aiMentorLanguage, setAiMentorLanguage] = useState('html');

  const [isKeyboardShortcutsOpen, setIsKeyboardShortcutsOpen] = useState(false);

  const openKeyboardShortcuts = () => setIsKeyboardShortcutsOpen(true);
  const closeKeyboardShortcuts = () => setIsKeyboardShortcutsOpen(false);
  const toggleKeyboardShortcuts = () => setIsKeyboardShortcutsOpen(prev => !prev);

  const openAiMentor = (code?: string, lessonTitle?: string, language?: string) => {
    if (code !== undefined) setAiMentorInitialCode(code);
    if (lessonTitle !== undefined) setAiMentorLessonTitle(lessonTitle);
    if (language !== undefined) setAiMentorLanguage(language);
    setIsAiMentorOpen(true);
  };

  const closeAiMentor = () => {
    setIsAiMentorOpen(false);
  };

  const setLastVisitedLessonInfo = (info: LastVisitedLessonInfo) => {
    setLastVisitedLesson(info);
    try {
      localStorage.setItem('codingvibes_last_lesson', JSON.stringify(info));
    } catch (e) {
      console.error(e);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const next = !prev;
      localStorage.setItem('codingvibes_theme', next ? 'dark' : 'light');
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Sync with browser URL hash for friendly shareable navigation and back-button support
  useEffect(() => {
    // On fresh startup / reload, if hash is not tryit, ensure we start on home
    const initialHash = window.location.hash.replace(/^#\/?/, '');
    const baseInitialHash = initialHash.split('?')[0].replace(/^\/|\/$/g, '');
    if (baseInitialHash && baseInitialHash !== 'tryit' && baseInitialHash !== 'studio') {
      try {
        history.replaceState(null, '', window.location.pathname);
      } catch {}
      setCurrentRoute('home');
      setParams({});
    }

    const handleHashChange = () => {
      const rawHash = window.location.hash.replace(/^#\/?/, '');
      if (!rawHash) {
        setCurrentRoute('home');
        setParams({});
        return;
      }

      const hashWithoutQuery = rawHash.split('?')[0].replace(/^\/|\/$/g, '');
      const parts = hashWithoutQuery.split('/');
      const section = parts[0];

      if (section === 'tryit') {
        setCurrentRoute('tryit');
      } else if (section === 'tutorials') {
        setCurrentRoute('tutorials');
      } else if (section === 'courses') {
        if (parts[1] && parts[2] === 'lesson' && parts[3]) {
          setCurrentRoute('lesson');
          setParams({ courseSlug: parts[1], lessonSlug: parts[3] });
        } else if (parts[1]) {
          setCurrentRoute('course-detail');
          setParams({ courseSlug: parts[1] });
        } else {
          setCurrentRoute('courses');
        }
      } else if (section === 'practice') {
        setCurrentRoute('practice');
      } else if (section === 'projects') {
        if (parts[1]) {
          setCurrentRoute('project-detail');
          setParams({ projectId: parts[1] });
        } else {
          setCurrentRoute('projects');
        }
      } else if (section === 'resources') {
        setCurrentRoute('resources');
      } else if (section === 'search') {
        setCurrentRoute('search');
        if (parts[1]) {
          setParams({ searchQuery: decodeURIComponent(parts[1]) });
        }
      } else if (section === 'profile') {
        setCurrentRoute('profile');
      } else if (section === 'settings') {
        setCurrentRoute('settings');
      } else if (section === 'tag-reference') {
        setCurrentRoute('tag-reference');
        if (parts[1]) {
          setParams({ tagSlug: parts[1] });
        }
      } else if (section === 'studio') {
        setCurrentRoute('studio');
      } else if (section === 'setup-guide') {
        setCurrentRoute('setup-guide');
      } else {
        setCurrentRoute('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route: AppRoute, newParams: NavigationParams = {}, isBackAction = false) => {
    if (!isBackAction) {
      setHistoryStack(prev => {
        // Don't push duplicate if route and params are identical
        const last = prev[prev.length - 1];
        if (last && last.route === currentRoute && JSON.stringify(last.params) === JSON.stringify(params)) {
          return prev;
        }
        return [...prev, { route: currentRoute, params, timestamp: Date.now() }].slice(-25);
      });
    }

    // If entering a lesson, update lastVisitedLesson
    if (route === 'lesson' && newParams.courseSlug && newParams.lessonSlug) {
      const lessonInfo: LastVisitedLessonInfo = {
        courseSlug: newParams.courseSlug,
        lessonSlug: newParams.lessonSlug,
        courseTitle: newParams.courseSlug.toUpperCase(),
        title: newParams.lessonSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
        timestamp: Date.now()
      };
      setLastVisitedLessonInfo(lessonInfo);
    }

    setCurrentRoute(route);
    setParams(newParams);
    window.scrollTo(0, 0);

    // Update browser hash
    if (route === 'home') {
      window.location.hash = '';
    } else if (route === 'tryit') {
      window.location.hash = '/tryit';
    } else if (route === 'lesson' && newParams.courseSlug && newParams.lessonSlug) {
      window.location.hash = `/courses/${newParams.courseSlug}/lesson/${newParams.lessonSlug}`;
    } else if (route === 'course-detail' && newParams.courseSlug) {
      window.location.hash = `/courses/${newParams.courseSlug}`;
    } else if (route === 'project-detail' && newParams.projectId) {
      window.location.hash = `/projects/${newParams.projectId}`;
    } else if (route === 'search' && newParams.searchQuery) {
      window.location.hash = `/search/${encodeURIComponent(newParams.searchQuery)}`;
    } else if (route === 'tag-reference') {
      window.location.hash = newParams.tagSlug ? `/tag-reference/${newParams.tagSlug}` : '/tag-reference';
    } else {
      window.location.hash = `/${route}`;
    }
  };

  const openTryit = (code: string, language: string = 'html', title: string = 'Tryit Editor') => {
    try {
      localStorage.setItem('codingvibes_tryit_code', code);
      localStorage.setItem('codingvibes_tryit_lang', language);
      localStorage.setItem('codingvibes_tryit_title', title);
      localStorage.setItem(`codingvibes_tryit_${language}_code`, code);
      localStorage.setItem('codingvibes_tryit_return_route', currentRoute);
      localStorage.setItem('codingvibes_tryit_return_params', JSON.stringify(params || {}));
      sessionStorage.setItem('codingvibes_tryit_code', code);
      sessionStorage.setItem('codingvibes_tryit_lang', language);
      sessionStorage.setItem('codingvibes_tryit_title', title);
    } catch {
      // ignore
    }

    // Pass parameters reliably in the URL hash query so even with browser storage partitioning
    // between iframe and new tab, the new tab gets the exact code, language, and title!
    const query = new URLSearchParams();
    query.set('lang', language);
    query.set('title', title);
    query.set('code', code);
    query.set('t', String(Date.now()));

    const targetUrl = `${window.location.origin}${window.location.pathname}#/tryit?${query.toString()}`;
    let opened = false;
    try {
      const newTab = window.open(targetUrl, '_blank');
      if (newTab && !newTab.closed) {
        opened = true;
        try {
          // Pass payload in window.name for fast in-memory transfer
          newTab.name = JSON.stringify({ code, language, title, timestamp: Date.now() });
        } catch {}
      }
    } catch {
      opened = false;
    }

    // Also broadcast across tabs via BroadcastChannel
    try {
      const bc = new BroadcastChannel('codingvibes_tryit_channel');
      bc.postMessage({ code, language, title, timestamp: Date.now() });
      setTimeout(() => {
        try { bc.close(); } catch {}
      }, 2000);
    } catch {}

    // Fallback: If browser popup blocker prevented opening a new tab, navigate within the app
    if (!opened) {
      navigateTo('tryit', {
        editorCode: code,
        editorLanguage: language,
        editorTitle: title,
        returnRoute: currentRoute,
        returnParams: params
      });
    }
  };

  const goBack = () => {
    if (historyStack.length > 0) {
      const previous = historyStack[historyStack.length - 1];
      setHistoryStack(prev => prev.slice(0, -1));
      navigateTo(previous.route, previous.params, true);
    } else {
      // Fallback: If no internal stack, go to home or check window.history
      if (currentRoute !== 'home') {
        navigateTo('home', {}, true);
      }
    }
  };

  const resumeLastLesson = () => {
    if (lastVisitedLesson) {
      navigateTo('lesson', {
        courseSlug: lastVisitedLesson.courseSlug,
        lessonSlug: lastVisitedLesson.lessonSlug
      });
      setIsSidebarOpen(true);
    }
  };

  const canGoBack = historyStack.length > 0 || currentRoute !== 'home';

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  const openSearchWithQuery = (q: string = '') => {
    navigateTo('search', { searchQuery: q });
  };

  // Global Keyboard Shortcuts handler
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isInput =
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable ||
          target.closest('.cm-editor') ||
          target.closest('.monaco-editor'));

      // 1. Dismiss shortcuts modal if open on Esc
      if (e.key === 'Escape' && isKeyboardShortcutsOpen) {
        e.preventDefault();
        setIsKeyboardShortcutsOpen(false);
        return;
      }

      // 2. Open Keyboard Shortcuts: '?' (or Shift + /) when not typing in an input, or Ctrl+/ / Cmd+/ anytime
      if (
        ((e.ctrlKey || e.metaKey) && e.key === '/') ||
        (!isInput && (e.key === '?' || (e.shiftKey && e.key === '/')))
      ) {
        e.preventDefault();
        setIsKeyboardShortcutsOpen(prev => !prev);
        return;
      }

      // 3. Global Search: Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        navigateTo('search');
        return;
      }

      // 4. AI Mentor: Ctrl+Shift+M or Cmd+Shift+M
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'm') {
        e.preventDefault();
        if (isAiMentorOpen) {
          setIsAiMentorOpen(false);
        } else {
          setIsAiMentorOpen(true);
        }
        return;
      }

      // If user is actively typing inside an input/textarea/editor, do not intercept navigation hotkeys
      if (isInput) return;

      // 5. Alt Navigation Hotkeys
      if (e.altKey && !e.ctrlKey && !e.metaKey) {
        const key = e.key.toLowerCase();
        if (key === 'h') {
          e.preventDefault();
          navigateTo('home');
        } else if (key === 'c') {
          e.preventDefault();
          navigateTo('courses');
        } else if (key === 'p') {
          e.preventDefault();
          navigateTo('practice');
        } else if (key === 't') {
          e.preventDefault();
          navigateTo('tryit');
        } else if (key === 'u') {
          e.preventDefault();
          navigateTo('profile');
        } else if (key === 'r') {
          e.preventDefault();
          navigateTo('resources');
        } else if (key === 'm') {
          e.preventDefault();
          toggleDarkMode();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          goBack();
        }
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [isKeyboardShortcutsOpen, isAiMentorOpen, navigateTo, goBack, toggleDarkMode]);

  return (
    <NavigationContext.Provider
      value={{
        currentRoute,
        params,
        navigateTo,
        openTryit,
        goBack,
        canGoBack,
        historyStack,
        lastVisitedLesson,
        resumeLastLesson,
        setLastVisitedLessonInfo,
        isSidebarOpen,
        setIsSidebarOpen,
        toggleSidebar,
        openSearchWithQuery,
        isDarkMode,
        toggleDarkMode,
        isAiMentorOpen,
        openAiMentor,
        closeAiMentor,
        aiMentorInitialCode,
        aiMentorLessonTitle,
        aiMentorLanguage,
        isKeyboardShortcutsOpen,
        openKeyboardShortcuts,
        closeKeyboardShortcuts,
        toggleKeyboardShortcuts
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) throw new Error('useNavigation must be used within a NavigationProvider');
  return context;
};
