import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { API_BASE_URL, API_PATH } from "@/constants/api";
import { generateUrl } from "@/utils/generateUrl";

import { api } from "@/services/APIRequest";
import { IBook } from "@/types/book";
import { useFetching } from "@/hooks";

type IBookContext = {
  books: IBook[];
  error: string;
  searchBooks: (input: string) => Promise<void>;
};

type IBookProvider = {
  children: ReactNode;
};

// Create books context with initial value
export const BooksContext = createContext<IBookContext>({} as IBookContext);

// Book provider
export const BooksProvider = ({ children }: IBookProvider) => {
  const [books, setBooks] = useState<IBook[]>([]);

  // Fetch data from server

  const { data: items, error } = useFetching<IBook[]>(
    `${API_BASE_URL}${API_PATH.BOOKS}`
  );

  useEffect(() => {
    setBooks(items);
  }, [!items, !error]);

  // Search by call api
  const searchBooks = useCallback(async (input: string): Promise<void> => {
    const result = await api.getData(
      generateUrl({ key: "name", value: input })
    );

    if (result.error) return setBooks([]);

    setBooks(result.data);
  }, []);

  const contextValue: IBookContext = {
    books: books || [],
    error,
    searchBooks,
  };

  return (
    <BooksContext.Provider value={contextValue}>
      {children}
    </BooksContext.Provider>
  );
};
