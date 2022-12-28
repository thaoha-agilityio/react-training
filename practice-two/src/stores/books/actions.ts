import { ACTIONS } from '@/constants/actions';
import { IBook } from '@/types/book';

export type GetBooks = {
  type: ACTIONS.GET_BOOKS;
  payload: {
    books: IBook[];
  };
};

export type SearchBook = {
  type: ACTIONS.SEARCH_BOOKS;
  payload: {
    books: IBook[];
  };
};

export type FilterByCategories = {
  type: ACTIONS.FILTER_BY_CATEGORIES;
  payload: {
    books: IBook[];
  };
};

export type ChangeGridView = {
  type: ACTIONS.CHANGE_GRID_VIEW;
  payload: {
    isGridView: boolean;
  };
};

export type SortByAlphabet = {
  type: ACTIONS.SORT_BY_ALPHABET;
  payload: {
    books: IBook[];
    sortNameStatus: boolean;
  };
};

export type SortByReleaseYear = {
  type: ACTIONS.SORT_BY_YEAR;
  payload: {
    books: IBook[];
    sortYearStatus: boolean;
  };
};

export type BooksAction =
  | GetBooks
  | SearchBook
  | FilterByCategories
  | ChangeGridView
  | SortByAlphabet
  | SortByReleaseYear;
