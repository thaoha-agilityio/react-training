import { ACTIONS } from '@/constants/actions';
import { ICategory } from '@/types/category';

export type GetCategories = {
  type: ACTIONS.GET_CATEGORIES;
  payload: {
    categories: ICategory[];
  };
};

export type SelectedCategoriesId = {
  type: ACTIONS.SELECTED_CATEGORIES_ID;
  payload: {
    categoriesId: string[];
  };
};

export type RemoveCategoriesId = {
  type: ACTIONS.REMOVE_CATEGORIES_ID;
  payload: {
    categoriesId: string[];
  };
};

export type CategoriesAction = GetCategories | SelectedCategoriesId | RemoveCategoriesId;
