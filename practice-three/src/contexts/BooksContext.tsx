import { createContext, ReactNode, useMemo } from "react";
import { useFetching } from "@/hooks/useFetching";

import { API_BASE_URL, API_PATH } from "@/constants/api";

import { IBook } from "@/types/book";

type IBookContext = {
  books: IBook[];
};

type IBookProvider = {
  children: ReactNode;
};

// Create books context with initial value
export const BooksContext = createContext<IBookContext>({} as IBookContext);

// Book provider
export const BooksProvider = ({ children }: IBookProvider) => {
  // Fetch data from server
  const { data: items } = useFetching<IBook[]>(
    `${API_BASE_URL}${API_PATH.BOOKS}`
  );

  const value: IBookContext = {
    books: items || [],
  };

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};
