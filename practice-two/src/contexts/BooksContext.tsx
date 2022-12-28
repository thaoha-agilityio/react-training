import { createContext, Context, ReactNode, useEffect, useReducer, useMemo, useState } from 'react';

import { API_BASE_URL, API_PATH } from '@/constants/api';
import { getData } from '@/services/APIRequest';
import { IBook } from '@/types/book';
import { booksReducer, initialState } from '@/stores/books/reducers';
import { ACTIONS } from '@/constants/actions';
import { generateUrl } from '@/helper/generateUrl';
import { ERROR_MESSAGE } from '@/constants/messages';

interface IBookContext {
  isGridView: boolean;
  sortNameStatus: boolean;
  sortYearStatus: boolean;
  books: IBook[];
  getBookById: (id: string) => IBook;
  searchBooks: (input: string) => Promise<void>;
  filterByCategories: (ids: string[]) => void;
  changeGridView: () => void;
  getBooks: () => Promise<void>;
  sortByAlphabet: () => void;
  sortByReleaseYear: () => void;
}

interface IBookProvider {
  children: ReactNode;
}

// Create books context with initial value
export const BooksContext: Context<IBookContext> = createContext({} as unknown as IBookContext);

// Book provider
export const BooksProvider = ({ children }: IBookProvider) => {
  const [state, dispatch] = useReducer(booksReducer, initialState);

  // Get data from server
  const getBooks = async (): Promise<void> => {
    try {
      const result: IBook[] = await getData(`${API_BASE_URL}${API_PATH.books}`);

      dispatch({
        type: ACTIONS.GET_BOOKS,
        payload: {
          books: result,
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
      alert(ERROR_MESSAGE);
    }
  };

  // Show book item by id
  const getBookById = (id: string): IBook => {
    const book: IBook = state.books.find((item) => item.id === id) as IBook;

    return book;
  };

  // Search by call api
  const searchBooks = async (input: string): Promise<void> => {
    try {
      const result: IBook[] = await getData(generateUrl({ searchInput: input }));

      dispatch({
        type: ACTIONS.SEARCH_BOOKS,
        payload: {
          books: result,
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
      alert(ERROR_MESSAGE);
    }
  };

  // Filter by categories
  const filterByCategories = async (ids: string[]): Promise<void> => {
    try {
      const result: IBook[] = await getData(generateUrl({ categoryIds: ids }));

      dispatch({
        type: ACTIONS.FILTER_BY_CATEGORIES,
        payload: {
          books: result,
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
      alert(ERROR_MESSAGE);
    }
  };

  // Change book view mode to grid
  const changeGridView = (): void => {
    dispatch({
      type: ACTIONS.CHANGE_GRID_VIEW,
      payload: {
        isGridView: !state.isGridView,
      },
    });
  };

  // Sort by name
  const sortByAlphabet = () => {
    // Toggle sort desc <=> asc
    const result: IBook[] = state.books.sort((a, b) => {
      return state.sortNameStatus ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name);
    });

    dispatch({
      type: ACTIONS.SORT_BY_ALPHABET,
      payload: {
        books: result,
        sortNameStatus: !state.sortNameStatus,
      },
    });
  };

  // Sort by year
  const sortByReleaseYear = () => {
    // Toggle sort desc <=> asc
    const result: IBook[] = state.books.sort((a, b) => {
      return state.sortYearStatus ? b.published - a.published : a.published - b.published;
    });

    dispatch({
      type: ACTIONS.SORT_BY_YEAR,
      payload: {
        books: result,
        sortYearStatus: !state.sortYearStatus,
      },
    });
  };

  useEffect(() => {
    getBooks();
  }, []);

  // Value pass to provider context
  const value = useMemo(
    () => ({
      books: state.books,
      ids: state.ids,
      isGridView: state.isGridView,
      sortNameStatus: state.sortNameStatus,
      sortYearStatus: state.sortYearStatus,
      getBookById,
      searchBooks,
      filterByCategories,
      changeGridView,
      sortByAlphabet,
      sortByReleaseYear,
      getBooks,
      dispatch,
    }),
    [state]
  );

  return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>;
};
