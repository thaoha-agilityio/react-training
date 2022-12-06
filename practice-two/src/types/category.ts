import { CATEGORIES_BACKGROUND } from '@/constants/categories';

export interface ICategory {
  categoryName: string;
  acronym: string;
  total: Number;
  background: CATEGORIES_BACKGROUND;
}
