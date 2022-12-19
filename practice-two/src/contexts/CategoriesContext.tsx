import { Context, createContext, Dispatch, ReactNode, useEffect, useMemo, useReducer } from 'react';

import { CategoriesAction } from '@/stores/categories/actions';
import { ICategory } from '@/types/category';
import { categoriesReducer, initialState } from '@/stores/categories/reducers';
import { API_BASE_URL, API_PATH } from '@/constants/api';
import { getData } from '@/services/APIRequest';
import { ACTIONS } from '@/constants/actions';

interface ICategoriesContext {
  categories: ICategory[];
  categoriesId: string[];
  getSelectedId: (id: string) => void;
  getCategoryById: (ids: string[]) => ICategory[];
  removeCategoriesId: (categoryId: string) => void;
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
  const fetchData = async (): Promise<void> => {
    try {
      const result: ICategory[] = await getData(`${API_BASE_URL}${API_PATH.categories}`);

      dispatch({
        type: ACTIONS.GET_CATEGORIES,
        payload: {
          categories: result,
        },
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error('Unexpected error', error);
      }
    }
  };

  // Get categories id when click
  const getSelectedId = (id: string): void => {
    dispatch({
      type: ACTIONS.SELECTED_CATEGORIES_ID,
      payload: {
        categoriesId: [...state.categoriesId, id],
      },
    });
  };

  // Show categories name in sub heading
  const getCategoryById = (ids: string[]): ICategory[] => {
    const categories = state.categories.filter((item) => ids.some((id) => id === item.id));

    return categories;
  };

  // Remove categories in subHeading
  const removeCategoriesId = (categoryId: string): void => {
    // Remove id when click button
    const currentId = state.categoriesId.filter((id) => id !== categoryId);

    dispatch({
      type: ACTIONS.REMOVE_CATEGORIES_ID,
      payload: {
        categoriesId: currentId,
      },
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Value pass to provider context
  const value = useMemo(
    () => ({
      categories: state.categories,
      categoriesId: state.categoriesId,
      getSelectedId,
      getCategoryById,
      removeCategoriesId,
      dispatch,
    }),
    [state]
  );

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
