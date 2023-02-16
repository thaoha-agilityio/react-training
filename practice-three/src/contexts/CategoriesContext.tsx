import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { API_BASE_URL, API_PATH } from "../constants/api";
import { useFetching } from "../hooks/useFetching";
import { ICategory } from "../types/category";

export interface ICategoriesContext {
  categories: ICategory[];
  error: string;
  selectedIds: string[];
  setSelectedCategory: (id: string) => void;
  getCategoryById: (ids: string[]) => ICategory[];
  handleRemoveSelectedCategory: (categoryId: string) => void;
}

type CategoriesProvider = {
  children: ReactNode;
};

// Create books context with initial value
export const CategoriesContext = createContext<ICategoriesContext>(
  {} as ICategoriesContext
);

// Book provider
export const CategoriesProvider = ({ children }: CategoriesProvider) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // Fetch data from server
  const { data: items, error } = useFetching<ICategory[]>(
    `${API_BASE_URL}${API_PATH.CATEGORIES}`
  );

  // Set categories id when click
  const setSelectedCategory = useCallback(
    (id: string): void => {
      setSelectedIds([...selectedIds, id]);
    },
    [selectedIds]
  );

  // Show categories name in sub heading
  const getCategoryById = useCallback(
    (ids: string[]): ICategory[] =>
      categories?.filter((item) => ids.some((id) => id === item.id)),
    [categories]
  );

  // Remove categories in sub heading
  const handleRemoveSelectedCategory = useCallback(
    (categoryId: string): void => {
      // Remove id when click button
      const restIds = selectedIds.filter((id) => id !== categoryId);

      setSelectedIds(restIds);
    },
    [selectedIds]
  );

  useEffect(() => {
    setCategories(items);
  }, [!items]);

  const contextValue: ICategoriesContext = useMemo(
    () => ({
      categories: categories || [],
      error,
      selectedIds: selectedIds,
      setSelectedCategory,
      getCategoryById,
      handleRemoveSelectedCategory,
    }),
    [
      categories,
      error,
      setSelectedCategory,
      getCategoryById,
      handleRemoveSelectedCategory,
    ]
  );

  return (
    <CategoriesContext.Provider value={contextValue}>
      {children}
    </CategoriesContext.Provider>
  );
};
