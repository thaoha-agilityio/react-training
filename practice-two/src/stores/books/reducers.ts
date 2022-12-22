import { IBook } from '@/types/book';
import { ACTIONS } from '@/constants/actions';
import { BooksAction } from './actions';

export interface BooksState {
  books: IBook[];
  ids: string[];
  isGridView: boolean;
  sortNameStatus: boolean;
  sortYearStatus: boolean;
}

const initialState: BooksState = {
  books: [],
  ids: [],
  isGridView: true,
  sortNameStatus: false,
  sortYearStatus: false,
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
        sortNameStatus: actions.payload.sortNameStatus,
      };

    case ACTIONS.SORT_BY_YEAR:
      return {
        ...state,
        ids: actions.payload.ids,
        sortYearStatus: actions.payload.sortYearStatus,
      };
    default:
      return state;
  }
};

export { initialState, booksReducer };
