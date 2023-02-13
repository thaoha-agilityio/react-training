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
  selectedIds: string[];
  setSelectedCategory: (id: string) => void;
  getCategoryById: (ids: string[]) => ICategory[];
  removeSelectedCategory: (categoryId: string) => void;
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
  const removeSelectedCategory = useCallback(
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

  const contextValue: CategoriesContext = useMemo(
    () => ({
      categories: categories || [],
      error,
      selectedIds: selectedIds,
      setSelectedCategory,
      getCategoryById,
      removeSelectedCategory,
    }),
    [
      categories,
      error,
      setSelectedCategory,
      getCategoryById,
      removeSelectedCategory,
    ]
  );

  return (
    <CategoriesContext.Provider value={contextValue}>
      {children}
    </CategoriesContext.Provider>
  );
};
