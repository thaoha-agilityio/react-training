import { createContext, Context, ReactNode, useEffect, Dispatch, useReducer } from 'react';

import { API_BASE_URL, API_PATH } from '@/constants/api';
import { getData } from '@/services/APIRequest';
import { IBook } from '@/types/book';
import { BooksAction } from '@/stores/actions';
import { booksReducer, initialState } from '@/stores/BooksReducer';
import { ACTIONS } from '@/constants/actions';

interface IBookContext {
  books: IBook[];
  ids: string[];
  dispatch: Dispatch<BooksAction>;
}

interface IBookProvider {
  children: ReactNode;
}

// Create books context with initial value
export const BooksContext: Context<IBookContext> = createContext({
  books: [],
} as unknown as IBookContext);

// Book provider
export const BookProvider = ({ children }: IBookProvider) => {
  const [state, dispatch] = useReducer(booksReducer, initialState);

  // Get data from server
  const fetchData = async (): Promise<void> => {
    const result: IBook[] = await getData(`${API_BASE_URL}${API_PATH.books}`);

    // Filter ids in data
    const ids: string[] = [];
    result.forEach((item) => {
      if (item.id) ids.push(item.id);
    });

    dispatch({
      type: ACTIONS.GET_BOOKS,
      payload: {
        items: result,
        ids: ids,
      },
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Value pass to provider context
  const value = {
    books: state.items,
    ids: state.ids,
    dispatch,
  };

  return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>;
};
