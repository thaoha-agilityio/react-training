import { IBook } from '@/types/book';
import { ACTIONS } from '@/constants/actions';
import { BooksAction } from './actions';

export interface BooksState {
  books: IBook[];
  book: IBook | null;
  ids: string[];
  array: IBook[];
  isGridView: boolean;
}

const initialState: BooksState = {
  books: [],
  book: null,
  ids: [],
  array: [],
  isGridView: false,
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

    case ACTIONS.SEARCH_BOOKS:
      return {
        ...state,
        books: actions.payload.books,
        ids: actions.payload.ids,
      };

    case ACTIONS.FILTER_BY_CATEGORIES:
      return {
        ...state,
        books: actions.payload.books,
        ids: actions.payload.ids,
      };

    case ACTIONS.CHANGE_GRID_VIEW:
      return {
        ...state,
        isGridView: actions.payload.isGridView,
      };

    default:
      return state;
  }
};

export { initialState, booksReducer };
