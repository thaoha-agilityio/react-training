import { API_PATH, API_BASE_URL } from '@/constants/api';

type FilterType = {
  searchInput?: string;
};

export const generateUrl = (filterOption: FilterType) => {
  const { searchInput } = filterOption;

  let result = `${API_BASE_URL}${API_PATH.books}`;

  switch (true) {
    case searchInput && searchInput !== '':
      return (result += `?name=${searchInput}`);

    default:
      return result;
  }
};
