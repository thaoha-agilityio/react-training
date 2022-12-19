import { ACTIONS } from '@/constants/actions';
import { CategoriesAction } from './actions';
import { ICategory } from '@/types/category';

export interface CategoriesState {
  categories: ICategory[];
  categoriesId: string[];
}

const initialState: CategoriesState = {
  categories: [],
  categoriesId: [],
};

const categoriesReducer = (
  state: CategoriesState = initialState,
  actions: CategoriesAction
): CategoriesState => {
  switch (actions.type) {
    case ACTIONS.GET_CATEGORIES:
      return {
        ...state,
        categories: actions.payload.categories,
      };

    case ACTIONS.SELECTED_CATEGORIES_ID:
      return {
        ...state,
        categoriesId: actions.payload.categoriesId,
      };

    case ACTIONS.REMOVE_CATEGORIES_ID:
      return {
        ...state,
        categoriesId: actions.payload.categoriesId,
      };
    default:
      return state;
  }
};

export { initialState, categoriesReducer };
