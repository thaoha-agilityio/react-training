export enum ACTIONS {
  GET_BOOKS = 'get_books',
  GET_BOOK_BY_ID = 'get_book_by_id',
  GET_CATEGORIES = 'get_categories',
  CHANGE_DARK_MODE = 'change_dark_mode',
  SEARCH_BOOKS = 'search_books',
  SET_SELECTED_CATEGORY = 'set_select_category',
  FILTER_BY_CATEGORIES = 'filter_by_categories',
  REMOVE_SELECTED_CATEGORY = 'remove_category_ids',
  CHANGE_GRID_VIEW = 'change_grid_view',
  SORT_BY_ALPHABET = 'sort_by_alphabet',
}

export const SORT = {
  ASC: 'ascending',
  DESC: 'descending',
};

export const KEY_NAME_ESC = 27;
