import { ACTIONS } from '@/constants/actions';
import { CategoriesAction } from './actions';
import { ICategory } from '@/types/category';

export interface CategoriesState {
  categories: ICategory[];
  categoryIds: string[];
}

const initialState: CategoriesState = {
  categories: [],
  categoryIds: [],
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

    case ACTIONS.SET_SELECTED_CATEGORY:
      return {
        ...state,
        categoryIds: actions.payload.categoryIds,
      };

    case ACTIONS.REMOVE_SELECTED_CATEGORY:
      return {
        ...state,
        categoryIds: actions.payload.categoryIds,
      };
    default:
      return state;
  }
};

export { initialState, categoriesReducer };
