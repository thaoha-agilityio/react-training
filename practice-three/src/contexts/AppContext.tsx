import React, { ReactNode } from "react";

import { BooksProvider } from "./BooksContext";

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return <BooksProvider>{children}</BooksProvider>;
};
