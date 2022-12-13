import { createContext, Context, ReactNode, useEffect, Dispatch, useReducer, useMemo } from 'react';

import { ThemeAction } from '@/stores/theme/action';
import { themeReducer, initialState } from '@/stores/theme/reducer';
import { ACTIONS } from '@/constants/actions';

interface IThemeContext {
  theme: 'dark-theme' | 'light-theme';
  toggleTheme: () => void;
  dispatch: Dispatch<ThemeAction>;
}

interface IThemeProvider {
  children: ReactNode;
}

// Create books context with initial value
export const ThemeContext: Context<IThemeContext> = createContext({} as unknown as IThemeContext);

// Book provider
export const ThemeProvider = ({ children }: IThemeProvider) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  // Change dark-light mode
  const toggleTheme = (): void => {
    dispatch({
      type: ACTIONS.CHANGE_DARK_MODE,
      payload: {
        theme: state.theme === 'dark-theme' ? 'light-theme' : 'dark-theme',
      },
    });
  };

  useEffect(() => {
    document.body.className = state.theme;
  }, [state.theme]);

  const value = {
    theme: state.theme,
    toggleTheme,
    dispatch,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
