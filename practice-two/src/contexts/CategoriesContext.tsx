import { Context, createContext, Dispatch, ReactNode, useEffect, useMemo, useReducer } from 'react';

import { CategoriesAction } from '@/stores/categories/actions';
import { ICategory } from '@/types/category';
import { categoriesReducer, initialState } from '@/stores/categories/reducers';
import { API_BASE_URL, API_PATH } from '@/constants/api';
import { getData } from '@/services/APIRequest';
import { ACTIONS } from '@/constants/actions';
import { ERROR_MESSAGES } from '@/constants/message';
import { AxiosError } from 'axios';

interface ICategoriesContext {
  categories: ICategory[];
  selectedIds: string[];
  setSelectedCategory: (id: string) => void;
  getCategoryById: (ids: string[]) => ICategory[];
  removeSelectedCategory: (categoryId: string) => void;
  dispatch: Dispatch<CategoriesAction>;
}

interface ICategoriesProvider {
  children: ReactNode;
}

// Create Categories context with initial value
export const CategoriesContext: Context<ICategoriesContext> = createContext({
  categories: [],
} as unknown as ICategoriesContext);

// Categories provider
export const CategoriesProvider = ({ children }: ICategoriesProvider) => {
  const [state, dispatch] = useReducer(categoriesReducer, initialState);

  // Get data from server
  const getCategories = async (): Promise<void> => {
    try {
      const result: ICategory[] = await getData(`${API_BASE_URL}${API_PATH.categories}`);

      dispatch({
        type: ACTIONS.GET_CATEGORIES,
        payload: {
          categories: result,
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
      alert(ERROR_MESSAGES);
    }
  };

  // Set categories id when click
  const setSelectedCategory = (id: string): void => {
    dispatch({
      type: ACTIONS.SET_SELECTED_CATEGORY,
      payload: {
        selectedIds: [...state.selectedIds, id],
      },
    });
  };

  // Show categories name in sub heading
  const getCategoryById = (ids: string[]): ICategory[] =>
    state.categories.filter((item) => ids.some((id) => id === item.id));

  // Remove categories in sub heading
  const removeSelectedCategory = (categoryId: string): void => {
    // Remove id when click button
    const restIds = state.selectedIds.filter((id) => id !== categoryId);

    dispatch({
      type: ACTIONS.REMOVE_SELECTED_CATEGORY,
      payload: {
        selectedIds: restIds,
      },
    });
  };

  useEffect(() => {
    getCategories();
  }, []);

  // Value pass to provider context
  const value = useMemo(
    () => ({
      categories: state.categories,
      selectedIds: state.selectedIds,
      setSelectedCategory,
      getCategoryById,
      removeSelectedCategory,
      dispatch,
    }),
    [state]
  );

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
