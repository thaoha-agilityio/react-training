import { ACTIONS } from '@/constants/actions';
import { ThemeAction } from './action';

export interface ThemeState {
  isDarkMode: boolean;
}

const initialState: ThemeState = {
  isDarkMode: false,
};

const themeReducer = (state: ThemeState = initialState, actions: ThemeAction): ThemeState => {
  switch (actions.type) {
    case ACTIONS.CHANGE_DARK_MODE:
      return {
        ...state,
        isDarkMode: actions.payload.isDarkMode,
      };
    default:
      return state;
  }
};

export { initialState, themeReducer };
