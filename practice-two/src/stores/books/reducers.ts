import { IBook } from '@/types/book';
import { ACTIONS } from '@/constants/actions';
import { BooksAction } from './actions';

export interface BooksState {
  books: IBook[];
  ids: string[];
  isGridView: boolean;
}

const initialState: BooksState = {
  books: [],
  ids: [],
  isGridView: true,
};

const booksReducer = (state: BooksState = initialState, actions: BooksAction): BooksState => {
  switch (actions.type) {
    case ACTIONS.GET_BOOKS:
      return {
        ...state,
        books: actions.payload.books,
        ids: actions.payload.ids,
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

    case ACTIONS.SORT_BY_ALPHABET:
      return {
        ...state,
        ids: actions.payload.ids,
      };

    case ACTIONS.SORT_BY_Year:
      return {
        ...state,
        ids: actions.payload.ids,
      };
    default:
      return state;
  }
};

export { initialState, booksReducer };
