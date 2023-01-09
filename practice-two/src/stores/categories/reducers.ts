import { ACTIONS } from '@/constants/actions';
import { CategoriesAction } from './actions';
import { ICategory } from '@/types/category';

export interface CategoriesState {
  categories: ICategory[];
  selectedIds: string[];
}

const initialState: CategoriesState = {
  categories: [],
  selectedIds: [],
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
        selectedIds: actions.payload.selectedIds,
      };

    case ACTIONS.REMOVE_SELECTED_CATEGORY:
      return {
        ...state,
        selectedIds: actions.payload.selectedIds,
      };
    default:
      return state;
  }
};

export { initialState, categoriesReducer };
