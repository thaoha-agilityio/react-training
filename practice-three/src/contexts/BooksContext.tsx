import { createContext, ReactNode, useEffect, useState } from "react";
import { useFetching } from "@/hooks/useFetching";

import { API_BASE_URL, API_PATH } from "@/constants/api";

import { IBook } from "@/types/book";

interface IBookContext {
  books: IBook[];
}

interface IBookProvider {
  children: ReactNode;
}

// Create books context with initial value
export const BooksContext = createContext<IBookContext>({} as IBookContext);

// Book provider
export const BooksProvider = ({ children }: IBookProvider) => {
  const [books, setBooks] = useState<IBook[]>([]);

  // Fetch data from server
  const { data: items, error } = useFetching<IBook[]>(
    "api/books",
    `${API_BASE_URL}${API_PATH.books}`
  );

  useEffect(() => {
    setBooks(items ?? []);
  }, [!items && !error]);

  const value: IBookContext = {
    books: books,
  };

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};
