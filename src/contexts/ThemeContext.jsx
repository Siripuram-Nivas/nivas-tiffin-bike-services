import { createContext, useContext, useEffect, useState, useCallback } from 'react';

/**
 * ThemeContext — manages light / dark / system theme.
 * Persists to localStorage under key 'nivas-theme'.
 * When 'system' is selected, listens to OS prefers-color-scheme changes.
 */
const ThemeContext = createContext(null);

/** Returns the effective boolean isDark for a given preference + OS state */
const resolveIsDark = (preference) => {
  if (preference === 'dark') return true;
  if (preference === 'light') return false;
  // 'system'
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const applyDark = (isDark) => {
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => {
    try {
      return localStorage.getItem('nivas-theme') || 'system';
    } catch {
      return 'system';
    }
  });

  const setTheme = useCallback((newTheme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem('nivas-theme', newTheme);
    } catch { /* ignore */ }
    applyDark(resolveIsDark(newTheme));
  }, []);

  // Initial apply + system-change listener
  useEffect(() => {
    applyDark(resolveIsDark(theme));

    if (theme !== 'system') return;

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => applyDark(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>');
  return ctx;
};
