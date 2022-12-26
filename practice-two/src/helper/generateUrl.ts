import { API_PATH, API_BASE_URL } from '@/constants/api';

type FilterType = {
  searchInput?: string;
  categoryIds?: string[];
};

export const generateUrl = (filterOption: FilterType) => {
  const { searchInput, categoryIds } = filterOption;

  let result = `${API_BASE_URL}${API_PATH.books}`;

  // Add query params to GET request
  switch (true) {
    case !!searchInput && searchInput !== ' ':
      return (result += `?name=${searchInput}`);

    case !!categoryIds:
      return (result += `?categoryId=[${categoryIds}]`);

    default:
      return result;
  }
};
