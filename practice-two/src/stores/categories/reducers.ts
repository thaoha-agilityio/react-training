import { ACTIONS } from '@/constants/actions';
import { CategoriesAction } from './actions';
import { ICategory } from '@/types/category';

export interface CategoriesState {
  categories: ICategory[];
}

const initialState: CategoriesState = {
  categories: [],
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
    default:
      return state;
  }
};

export { initialState, categoriesReducer };
