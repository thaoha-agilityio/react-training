import React, { ReactNode } from 'react';

import { BooksProvider } from './BooksContext';
import { CategoriesProvider } from './CategoriesContext';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <BooksProvider>
      <CategoriesProvider>{children}</CategoriesProvider>
    </BooksProvider>
  );
};
