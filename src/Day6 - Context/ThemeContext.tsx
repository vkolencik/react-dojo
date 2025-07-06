// ThemeContext.tsx
import { createContext, useState, type ReactNode, useMemo, useContext } from 'react';

export type Theme = 'light' | 'dark';
export type ThemeControls = {theme: Theme, toggle: () => void};

const ThemeContext = createContext<ThemeControls | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  console.log('Theme provider render');
  const [theme, setTheme] = useState<Theme>('light');
  const toggle = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  // bundle the value in a stable object
  const value = useMemo(() => ({ theme, toggle }), [theme]);
  // ayconst value = { theme, toggle };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeControls {
    const themeControls = useContext(ThemeContext);
    if (themeControls === null) throw new Error('No theme context set');

    return themeControls;        
} 