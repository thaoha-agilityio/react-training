import {
  createContext,
  Context,
  ReactNode,
  useEffect,
  Dispatch,
  useReducer,
  useMemo,
  useState,
  useCallback,
} from 'react';

import { API_BASE_URL, API_PATH } from '@/constants/api';
import { getData } from '@/services/APIRequest';
import { IBook } from '@/types/book';
import { BooksAction } from '@/stores/books/actions';
import { booksReducer, initialState } from '@/stores/books/reducers';
import { ACTIONS } from '@/constants/actions';
import { generateUrl } from '@/helper/filter';
import { getIdsFromList } from '@/helper/getIds';
import { ERROR_MESSAGES } from '@/constants/message';

interface IBookContext {
  isGridView: boolean;
  sortNameStatus: boolean;
  sortYearStatus: boolean;
  books: IBook[];
  ids: string[];
  getBookById: (id: string) => IBook;
  searchBooks: (input: string) => Promise<void>;
  filterByCategories: (ids: string[]) => void;
  changeGridView: () => void;
  getBooks: () => Promise<void>;
  sortByAlphabet: () => void;
  sortByReleaseYear: () => void;
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

  const [searchBooksIds, setSearchBooksIds] = useState<string[]>();
  const [filterBookIds, setFilterBookIds] = useState<string[]>();

  // Get data from server
  const getBooks = async (): Promise<void> => {
    try {
      const result: IBook[] = await getData(`${API_BASE_URL}${API_PATH.books}`);

      dispatch({
        type: ACTIONS.GET_BOOKS,
        payload: {
          books: result,
          ids: getIdsFromList(result),
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
      alert(ERROR_MESSAGES);
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

      let bookIds = getIdsFromList(result);
      setSearchBooksIds(bookIds);

      // Find searchBooksIds matching filterBookIds
      if (filterBookIds) {
        bookIds = bookIds.filter((id) => filterBookIds.indexOf(id) !== -1);
      }

      dispatch({
        type: ACTIONS.SEARCH_BOOKS,
        payload: {
          books: result,
          ids: bookIds,
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
      alert(ERROR_MESSAGES);
    }
  };

  // Filter by categories
  const filterByCategories = async (ids: string[]): Promise<void> => {
    try {
      const result: IBook[] = await getData(generateUrl({ categoryIds: ids }));

      let bookIds = getIdsFromList(result);
      setFilterBookIds(bookIds);

      // Find filterBookIds matching searchBooksIds
      if (searchBooksIds) {
        bookIds = bookIds.filter((id) => searchBooksIds.indexOf(id) !== -1);
      }

      dispatch({
        type: ACTIONS.FILTER_BY_CATEGORIES,
        payload: {
          books: result,
          ids: bookIds,
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
      alert(ERROR_MESSAGES);
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
      return state.sortNameStatus ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    });

    dispatch({
      type: ACTIONS.SORT_BY_ALPHABET,
      payload: {
        ids: getIdsFromList(result),
        sortNameStatus: !state.sortNameStatus,
      },
    });
  };

  // Sort by year
  const sortByReleaseYear = () => {
    // Toggle sort desc <=> asc
    const result: IBook[] = state.books.sort((a, b) => {
      return state.sortYearStatus ? a.published - b.published : b.published - a.published;
    });

    dispatch({
      type: ACTIONS.SORT_BY_Year,
      payload: {
        ids: getIdsFromList(result),
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
