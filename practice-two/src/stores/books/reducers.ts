import { IBook } from '@/types/book';
import { ACTIONS } from '@/constants/actions';
import { BooksAction } from './actions';

export interface BooksState {
  books: IBook[];
  book: IBook | null;
  ids: string[];
  theme: 'dark-theme' | 'light-theme';
}

const initialState: BooksState = {
  books: [],
  book: null,
  ids: [],
  theme: 'light-theme',
};

const booksReducer = (state: BooksState = initialState, actions: BooksAction): BooksState => {
  switch (actions.type) {
    case ACTIONS.GET_BOOKS:
      return {
        ...state,
        books: actions.payload.books,
        ids: actions.payload.ids,
      };

    case ACTIONS.GET_BOOK_BY_ID:
      return {
        ...state,
        book: actions.payload.book,
      };

    case ACTIONS.CHANGE_DARK_MODE:
      return {
        ...state,
        theme: actions.payload.theme,
      };
    default:
      return state;
  }
};

export { initialState, booksReducer };
