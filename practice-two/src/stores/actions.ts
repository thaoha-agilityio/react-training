import { ACTIONS } from '@/constants/actions';
import { IBook } from '@/types/book';

export type GetBooks = {
  type: ACTIONS.GET_BOOKS;
  payload: {
    items: IBook[];
    ids: string[];
  };
};

export type ChangeDarkMode = {
  type: ACTIONS.CHANGE_DARK_MODE;
};

export type BooksAction = GetBooks | ChangeDarkMode;
