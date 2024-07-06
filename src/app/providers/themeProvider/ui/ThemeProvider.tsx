import { ReactNode, useMemo, useState } from 'react';
import { LOCAL_STORAGE_KEY_THEME, Theme, ThemeContext } from '../lib/ThemeContext';

type ThemeProviderProps = {
  children: ReactNode;
};

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_KEY_THEME) as Theme) || Theme.LIGHT;

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
}
