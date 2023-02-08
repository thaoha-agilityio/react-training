import { API_PATH, API_BASE_URL } from "@/constants/api";

type FilterType = {
  key: string;
  queryString?: string;
  queryStringArr?: string[];
};

export const generateUrl = (filterOption: FilterType): string => {
  const { key, queryString, queryStringArr } = filterOption;

  let url = `${API_BASE_URL}${API_PATH.BOOKS}`;

  // Add query params to GET request
  switch (true) {
    case !!queryString && queryString !== " ":
      url += `?${key}=${queryString}`;
      break;

    case !!queryStringArr:
      url += `?${key}=[${queryStringArr}]`;
      break;
  }

  return url;
};
