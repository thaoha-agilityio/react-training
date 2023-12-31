import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

import { API_BASE_URL, API_PATH } from '../constants/api';
import { book as defaultBook } from '../constants/mockData';

import { generateUrl } from '../utils/generateUrl';

import { api } from '../services/APIRequest';
import { IBook } from '../types/book';
import { useFetching } from '../hooks/useFetching';

export interface IBookContext {
  books: IBook[];
  error: string;
  isGridView: boolean;
  isSortNameStatus: boolean;
  isSortYearStatus: boolean;
  isLoading: boolean;
  searchBooks: (input: string) => Promise<void>;
  getBookById: (id: string) => IBook;
  handleChangeGridView: () => void;
  handleSortByAlphabet: () => void;
  handleSortByReleaseYear: () => void;
  handleFilterByCategories: (ids: string[]) => void;
}

type IBookProvider = {
  children: ReactNode;
};

// Create books context with initial value
export const BooksContext = createContext<IBookContext>({} as IBookContext);

// Book provider
export const BooksProvider = ({ children }: IBookProvider) => {
  const [books, setBooks] = useState<IBook[]>([]);

  const [isGridView, setIsGridVIew] = useState<boolean>(true);

  const [isSortNameStatus, setIsSortNameStatus] = useState<boolean>(false);
  const [isSortYearStatus, setIsSortYearStatus] = useState<boolean>(false);

  // Fetch data from server
  const {
    data: items,
    error,
    isLoading,
  } = useFetching<IBook[]>(`${API_BASE_URL}${API_PATH.BOOKS}`);

  useEffect(() => {
    if (items) setBooks(items);
  }, [items]);

  // Search by call api
  const searchBooks = useCallback(async (input: string): Promise<void> => {
    const result = await api.getData(generateUrl({ key: 'name', value: input }));

    if (result.error) return setBooks([]);

    setBooks(result.data);
  }, []);

  // Show book detail item by id
  const getBookById = useCallback(
    (id: string): IBook => {
      const book: IBook = books.find((item) => item.id === id) || defaultBook;

      return book;
    },
    [books]
  );

  // Change grid view layout
  const handleChangeGridView = useCallback((): void => {
    setIsGridVIew((prev) => !prev);
  }, []);

  // Sort by name
  const handleSortByAlphabet = useCallback((): void => {
    // Toggle sort desc <=> asc
    const result: IBook[] = books.sort((a, b) => {
      return typeof a.name === 'string' && typeof b.name === 'string'
        ? isSortNameStatus
          ? b.name.localeCompare(a.name)
          : a.name.localeCompare(b.name)
        : 0;
    });

    // Set state when click
    setIsSortNameStatus((prev) => !prev);

    setBooks(result);
  }, [books, isSortNameStatus]);

  // Sort by year
  const handleSortByReleaseYear = useCallback((): void => {
    // Toggle sort desc <=> asc
    const result: IBook[] = books.sort((a, b) => {
      return typeof a.published === 'number' && typeof b.published === 'number'
        ? isSortYearStatus
          ? b.published - a.published
          : a.published - b.published
        : 0;
    });

    // Set state when click
    setIsSortYearStatus((prev) => !prev);

    setBooks(result);
  }, [books, isSortYearStatus]);

  // Filter by categories
  const handleFilterByCategories = useCallback(async (ids: string[]): Promise<void> => {
    const result = await api.getData(generateUrl({ key: 'categoryId', value: ids }));

    if (result.error) return setBooks([]);

    setBooks(result.data);
  }, []);

  const contextValue: IBookContext = useMemo(
    () => ({
      books: books || [],
      error,
      isLoading,
      isGridView: isGridView,
      isSortNameStatus: isSortNameStatus,
      isSortYearStatus: isSortYearStatus,
      searchBooks,
      getBookById,
      handleChangeGridView,
      handleSortByReleaseYear,
      handleSortByAlphabet,
      handleFilterByCategories,
    }),
    [
      books,
      error,
      isLoading,
      isGridView,
      isSortYearStatus,
      isSortNameStatus,
      searchBooks,
      getBookById,
      handleChangeGridView,
      handleSortByAlphabet,
      handleSortByReleaseYear,
      handleFilterByCategories,
    ]
  );

  return <BooksContext.Provider value={contextValue}>{children}</BooksContext.Provider>;
};
