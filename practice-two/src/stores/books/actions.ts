import { ACTIONS } from '@/constants/actions';
import { IBook } from '@/types/book';

export type GetBooks = {
  type: ACTIONS.GET_BOOKS;
  payload: {
    books: IBook[];
    ids: string[];
  };
};

export type GetBookById = {
  type: ACTIONS.GET_BOOK_BY_ID;
  payload: {
    book: IBook;
  };
};

export type SearchBook = {
  type: ACTIONS.SEARCH_BOOKS;
  payload: {
    books: IBook[];
    ids: string[];
  };
};

export type BooksAction = GetBooks | GetBookById | SearchBook;
