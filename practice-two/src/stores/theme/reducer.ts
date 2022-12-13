import { ACTIONS } from '@/constants/actions';
import { ThemeAction } from './action';

export interface BooksState {
  theme: boolean;
}

const initialState: BooksState = {
  theme: true,
};

const themeReducer = (state: BooksState = initialState, actions: ThemeAction): BooksState => {
  switch (actions.type) {
    case ACTIONS.CHANGE_DARK_MODE:
      return {
        ...state,
        theme: actions.payload.theme,
      };
    default:
      return state;
  }
};

export { initialState, themeReducer };
