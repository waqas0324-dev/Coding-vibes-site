import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  EditorTheme,
  EDITOR_THEMES,
  getThemeById,
  DEFAULT_DARK_THEME_ID,
  DEFAULT_LIGHT_THEME_ID,
} from '../data/editorThemes';

const STORAGE_KEY = 'codingvibes_tryit_theme';
const LAST_DARK_KEY = 'codingvibes_tryit_last_dark';
const LAST_LIGHT_KEY = 'codingvibes_tryit_last_light';

interface EditorThemeContextValue {
  theme: EditorTheme;
  themeId: string;
  mode: 'dark' | 'light';
  setThemeId: (themeId: string) => void;
  toggleMode: () => void;
  themes: EditorTheme[];
  darkThemes: EditorTheme[];
  lightThemes: EditorTheme[];
}

const EditorThemeContext = createContext<EditorThemeContextValue | undefined>(undefined);

export const EditorThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeId, setThemeIdState] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && EDITOR_THEMES.some(t => t.id === saved)) {
        return saved;
      }
    } catch {}
    return DEFAULT_DARK_THEME_ID;
  });

  const [lastDarkId, setLastDarkId] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(LAST_DARK_KEY);
      if (saved && EDITOR_THEMES.some(t => t.id === saved && t.mode === 'dark')) {
        return saved;
      }
    } catch {}
    return DEFAULT_DARK_THEME_ID;
  });

  const [lastLightId, setLastLightId] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(LAST_LIGHT_KEY);
      if (saved && EDITOR_THEMES.some(t => t.id === saved && t.mode === 'light')) {
        return saved;
      }
    } catch {}
    return DEFAULT_LIGHT_THEME_ID;
  });

  const currentTheme = getThemeById(themeId);

  const setThemeId = (newId: string) => {
    const targetTheme = getThemeById(newId);
    setThemeIdState(targetTheme.id);

    try {
      localStorage.setItem(STORAGE_KEY, targetTheme.id);
      if (targetTheme.mode === 'dark') {
        localStorage.setItem(LAST_DARK_KEY, targetTheme.id);
        setLastDarkId(targetTheme.id);
      } else {
        localStorage.setItem(LAST_LIGHT_KEY, targetTheme.id);
        setLastLightId(targetTheme.id);
      }

      // Notify other tabs or windows
      try {
        const bc = new BroadcastChannel('codingvibes_theme_channel');
        bc.postMessage({ type: 'THEME_CHANGED', themeId: targetTheme.id });
        bc.close();
      } catch {}
    } catch (e) {
      console.error('Failed to persist editor theme:', e);
    }
  };

  const toggleMode = () => {
    if (currentTheme.mode === 'dark') {
      setThemeId(lastLightId);
    } else {
      setThemeId(lastDarkId);
    }
  };

  // Listen for storage events across windows/tabs
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        if (EDITOR_THEMES.some(t => t.id === e.newValue)) {
          setThemeIdState(e.newValue);
        }
      }
    };

    let bc: BroadcastChannel | null = null;
    try {
      bc = new BroadcastChannel('codingvibes_theme_channel');
      bc.onmessage = (event) => {
        if (event.data?.type === 'THEME_CHANGED' && event.data?.themeId) {
          setThemeIdState(event.data.themeId);
        }
      };
    } catch {}

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      if (bc) {
        try { bc.close(); } catch {}
      }
    };
  }, []);

  const darkThemes = EDITOR_THEMES.filter(t => t.mode === 'dark');
  const lightThemes = EDITOR_THEMES.filter(t => t.mode === 'light');

  return (
    <EditorThemeContext.Provider
      value={{
        theme: currentTheme,
        themeId: currentTheme.id,
        mode: currentTheme.mode,
        setThemeId,
        toggleMode,
        themes: EDITOR_THEMES,
        darkThemes,
        lightThemes,
      }}
    >
      {children}
    </EditorThemeContext.Provider>
  );
};

export const useEditorTheme = (): EditorThemeContextValue => {
  const context = useContext(EditorThemeContext);
  if (!context) {
    throw new Error('useEditorTheme must be used within an EditorThemeProvider');
  }
  return context;
};
