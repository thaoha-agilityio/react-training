import { ACTIONS } from '@/constants/actions';
import { ICategory } from '@/types/category';

export type GetCategories = {
  type: ACTIONS.GET_CATEGORIES;
  payload: {
    categories: ICategory[];
  };
};

export type SetSelectedCategory = {
  type: ACTIONS.SET_SELECTED_CATEGORY;
  payload: {
    selectedIds: string[];
  };
};

export type RemoveSelectedCategoryIds = {
  type: ACTIONS.REMOVE_SELECTED_CATEGORY;
  payload: {
    selectedIds: string[];
  };
};

export type CategoriesAction = GetCategories | SetSelectedCategory | RemoveSelectedCategoryIds;
