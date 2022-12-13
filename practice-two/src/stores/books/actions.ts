import { ACTIONS } from '@/constants/actions';
import { IBook } from '@/types/book';

export type GetBooks = {
  type: ACTIONS.GET_BOOKS;
  payload: {
    books: IBook[];
    ids: string[];
  };
};

export type ChangeDarkMode = {
  type: ACTIONS.CHANGE_DARK_MODE;
};

export type GetBookById = {
  type: ACTIONS.GET_BOOK_BY_ID;
  payload: {
    book: IBook;
  };
};

export type BooksAction = GetBooks | GetBookById | ChangeDarkMode;
