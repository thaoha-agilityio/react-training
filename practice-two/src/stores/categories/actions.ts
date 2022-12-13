import { ACTIONS } from '@/constants/actions';
import { ICategory } from '@/types/category';

export type GetCategories = {
  type: ACTIONS.GET_CATEGORIES;
  payload: {
    categories: ICategory[];
  };
};

export type CategoriesAction = GetCategories;
