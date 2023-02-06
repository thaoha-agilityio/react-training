import { API_PATH, API_BASE_URL } from "@/constants/api";

type FilterType = {
  key: string;
  value?: string;
  values?: string[];
};

export const generateUrl = (filterOption: FilterType) => {
  const { value, values, key } = filterOption;

  let url = `${API_BASE_URL}${API_PATH.BOOKS}`;

  // Add query params to GET request
  switch (true) {
    case !!value && value !== " ":
      return (url += `?${key}=${value}`);

    case !!values:
      return (url += `?${key}=[${values}]`);

    default:
      return url;
  }
};
