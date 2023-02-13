import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { API_BASE_URL, API_PATH } from "@/constants/api";
import { useFetching } from "@/hooks";
import { ICategory } from "@/types/category";

type CategoriesContext = {
  categories: ICategory[];
  error: string;
};

type CategoriesProvider = {
  children: ReactNode;
};

// Create books context with initial value
export const CategoriesContext = createContext<CategoriesContext>(
  {} as CategoriesContext
);

// Book provider
export const CategoriesProvider = ({ children }: CategoriesProvider) => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  // Fetch data from server
  const { data: items, error } = useFetching<ICategory[]>(
    `${API_BASE_URL}${API_PATH.CATEGORIES}`
  );

  useEffect(() => {
    setCategories(items);
  }, [!items]);

  const contextValue: CategoriesContext = useMemo(
    () => ({
      categories: categories || [],
      error,
    }),
    [categories, error]
  );

  return (
    <CategoriesContext.Provider value={contextValue}>
      {children}
    </CategoriesContext.Provider>
  );
};
