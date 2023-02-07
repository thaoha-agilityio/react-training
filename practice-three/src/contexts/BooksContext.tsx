import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import { useFetching } from "@/hooks";

import { API_BASE_URL, API_PATH } from "@/constants/api";
import { generateUrl } from "@/utils/generateUrl";

import { api } from "@/services/APIRequest";
import { IBook } from "@/types/book";

type IBookContext = {
  books: IBook[];
  searchBooks: (input: string) => Promise<void>;
};

type IBookProvider = {
  children: ReactNode;
};

// Create books context with initial value
export const BooksContext = createContext<IBookContext>({} as IBookContext);

// Book provider
export const BooksProvider = ({ children }: IBookProvider) => {
  const [books, setBooks] = useState<IBook[]>();

  // Fetch data from server
  const { data: items, error } = useFetching<IBook[]>(
    `${API_BASE_URL}${API_PATH.BOOKS}`
  );

  useEffect(() => {
    setBooks(items);
  }, [!items && !error]);

  // Search by call api
  const searchBooks = async (input: string): Promise<void> => {
    const result: IBook[] = (await api.getData(
      generateUrl({ key: "name", value: input })
    )) as IBook[];

    setBooks(result);
  };

  const value: IBookContext = useMemo(
    () => ({
      books: books || [],
      searchBooks,
    }),
    [books, searchBooks]
  );

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};
