import { Context, createContext, Dispatch, ReactNode, useEffect, useReducer } from 'react';

import { CategoriesAction } from '@/stores/categories/actions';
import { ICategory } from '@/types/category';
import { categoriesReducer, initialState } from '@/stores/categories/reducers';
import { API_BASE_URL, API_PATH } from '@/constants/api';
import { getData } from '@/services/APIRequest';
import { ACTIONS } from '@/constants/actions';

interface ICategoriesContext {
  categories: ICategory[];

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

  useEffect(() => {
    fetchData();
  }, []);

  // Value pass to provider context
  const value = {
    categories: state.categories,
    dispatch,
  };

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
