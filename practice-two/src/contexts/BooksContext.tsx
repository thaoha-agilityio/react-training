import { createContext, Context, ReactNode, useEffect, Dispatch, useReducer, useMemo } from 'react';

import { API_BASE_URL, API_PATH } from '@/constants/api';
import { getData } from '@/services/APIRequest';
import { IBook } from '@/types/book';
import { BooksAction } from '@/stores/books/actions';
import { booksReducer, initialState } from '@/stores/books/reducers';
import { ACTIONS } from '@/constants/actions';

interface IBookContext {
  books: IBook[];
  ids: string[];
  theme: 'dark-theme' | 'light-theme';
  toggleTheme: () => void;
  getBookById: (id: string) => IBook;
  dispatch: Dispatch<BooksAction>;
}

interface IBookProvider {
  children: ReactNode;
}

// Create books context with initial value
export const BooksContext: Context<IBookContext> = createContext({
  books: [],
  ids: [],
} as unknown as IBookContext);

// Book provider
export const BooksProvider = ({ children }: IBookProvider) => {
  const [state, dispatch] = useReducer(booksReducer, initialState);

  // Get data from server
  const fetchData = async (): Promise<void> => {
    try {
      const result: IBook[] = await getData(`${API_BASE_URL}${API_PATH.books}`);

      // Filter ids in data
      const ids: string[] = [];
      result.map((item) => {
        if (item.id) ids.push(item.id);
      });

      dispatch({
        type: ACTIONS.GET_BOOKS,
        payload: {
          books: result,
          ids: ids,
        },
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error('Unexpected error', error);
      }
    }
  };

  // Show book item by id
  const getBookById = (id: string): IBook => {
    const book: IBook = state.books.find((item) => item.id === id) as IBook;

    return book;
  };

  // Change dark-light mode
  const toggleTheme = (): void => {
    dispatch({
      type: ACTIONS.CHANGE_DARK_MODE,
      payload: {
        theme: state.theme === 'dark-theme' ? 'light-theme' : 'dark-theme',
      },
    });
  };

  useEffect(() => {
    document.body.className = state.theme;
  }, [state.theme]);

  useEffect(() => {
    fetchData();
  }, []);

  // Value pass to provider context
  const value = useMemo(
    () => ({
      books: state.books,
      ids: state.ids,
      theme: state.theme,
      getBookById,
      toggleTheme,
      dispatch,
    }),
    [state]
  );

  return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>;
};
