import { API_PATH, API_BASE_URL } from '@/constants/api';

type FilterType = {
  searchInput?: string;
  categoryIds?: string[];
  params?: string;
};

export const generateUrl = (filterOption: FilterType) => {
  const { searchInput, categoryIds, params } = filterOption;

  let result = `${API_BASE_URL}${API_PATH.books}`;

  switch (true) {
    case !!searchInput && searchInput !== ' ':
      return (result += `?name=${searchInput}`);

    case !!categoryIds:
      return (result += `?category=[${categoryIds}]`);

    case !!params:
      return (result += `?sortBy=${params}&order=asc`);

    default:
      return result;
  }
};
