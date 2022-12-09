import { IBook } from '@/types/book';
import { ACTIONS } from '@/constants/actions';
import { BooksAction } from './actions';

export interface BooksState {
  items: IBook[];
  currentItem: IBook | null;
}

const initialState: BooksState = {
  items: [],
  currentItem: null,
};

const booksReducer = (state: BooksState = initialState, actions: BooksAction): BooksState => {
  switch (actions.type) {
    case ACTIONS.GET_BOOKS:
      return {
        ...state,
        items: actions.payload.items,
      };

    default:
      return state;
  }
};

export { initialState, booksReducer };
