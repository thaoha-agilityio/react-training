import { ACTIONS } from '@/constants/actions';

export type ChangeDarkMode = {
  type: ACTIONS.CHANGE_DARK_MODE;
  payload: {
    theme: boolean;
  };
};

export type ThemeAction = ChangeDarkMode;
