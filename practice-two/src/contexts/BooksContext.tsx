import { createContext, Context, ReactNode, useEffect, Dispatch, useReducer, useMemo } from 'react';

import { API_BASE_URL, API_PATH } from '@/constants/api';
import { getData } from '@/services/APIRequest';
import { IBook } from '@/types/book';
import { BooksAction } from '@/stores/books/actions';
import { booksReducer, initialState } from '@/stores/books/reducers';
import { ACTIONS } from '@/constants/actions';
import { generateUrl } from '@/helper/filter';
import { filterId } from '@/helper/filterIds';

interface IBookContext {
  books: IBook[];
  ids: string[];
  getBookById: (id: string) => IBook;
  searchBooks: (input: string) => Promise<void>;
  filterByCategories: (ids: string[]) => void;
  fetchData: () => Promise<void>;
  dispatch: Dispatch<BooksAction>;
}

interface IBookProvider {
  children: ReactNode;
}

// Create books context with initial value
export const BooksContext: Context<IBookContext> = createContext({
  books: [],
  ids: [],
  searchItems: () => {},
} as unknown as IBookContext);

// Book provider
export const BooksProvider = ({ children }: IBookProvider) => {
  const [state, dispatch] = useReducer(booksReducer, initialState);

  // Get data from server
  const fetchData = async (): Promise<void> => {
    try {
      const result: IBook[] = await getData(`${API_BASE_URL}${API_PATH.books}`);

      dispatch({
        type: ACTIONS.GET_BOOKS,
        payload: {
          books: result,
          ids: filterId(result),
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

  //Search by call api
  const searchBooks = async (input: string): Promise<void> => {
    const result: IBook[] = await getData(generateUrl({ searchInput: input }));

    dispatch({
      type: ACTIONS.SEARCH_BOOKS,
      payload: {
        books: result,
        ids: filterId(result),
      },
    });
  };

  // Filter by categories
  const filterByCategories = async (ids: string[]): Promise<void> => {
    try {
      const result: IBook[] = await getData(generateUrl({ categoriesId: ids }));

      dispatch({
        type: ACTIONS.FILTER_BY_CATEGORIES,
        payload: {
          books: result,
          ids: filterId(result),
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

  useEffect(() => {
    fetchData();
  }, []);

  // Value pass to provider context
  const value = useMemo(
    () => ({
      books: state.books,
      ids: state.ids,
      getBookById,
      searchBooks,
      filterByCategories,
      fetchData,
      dispatch,
    }),
    [state]
  );

  return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>;
};
