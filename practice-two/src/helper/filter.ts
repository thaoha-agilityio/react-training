import { API_PATH, API_BASE_URL } from '@/constants/api';

type FilterType = {
  searchInput?: string;
  categoriesId?: string[];
};

export const generateUrl = (filterOption: FilterType) => {
  const { searchInput, categoriesId } = filterOption;

  let result = `${API_BASE_URL}${API_PATH.books}`;

  switch (true) {
    case searchInput && searchInput !== '':
      return (result += `?name=${searchInput}`);

    case !!categoriesId:
      return (result += `?category=[${categoriesId}]`);
    default:
      return result;
  }
};
