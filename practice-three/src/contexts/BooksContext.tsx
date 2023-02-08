import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import { useFetching } from "@/hooks";

import { API_BASE_URL, API_PATH } from "@/constants/api";
import { generateUrl } from "@/utils/generateUrl";

import { api } from "@/services/APIRequest";
import { IBook } from "@/types/book";

type IBookContext = {
  books: IBook[];
  error: Error;
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
    `${API_BASE_URL}${API_PATH}`
  );

  useEffect(() => {
    setBooks(items);
  }, [!items && !error]);

  // Search by call api
  const searchBooks = async (input: string): Promise<void> => {
    const result: IBook[] = (await api.getData(
      generateUrl({ key: "name", params: input })
    )) as IBook[];

    setBooks(result);
  };

  const contextValue: IBookContext = useMemo(
    () => ({
      books: books || [],
      error,
      searchBooks,
    }),
    [books, searchBooks]
  );

  return (
    <BooksContext.Provider value={contextValue}>
      {children}
    </BooksContext.Provider>
  );
};
