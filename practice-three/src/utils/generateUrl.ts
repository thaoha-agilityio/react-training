import { API_PATH, API_BASE_URL } from "../constants/api";

type FilterType = {
  key: string;
  value: string | string[];
};

export const generateUrl = (filterOption: FilterType): string => {
  const { key, value } = filterOption;
  const url = `${API_BASE_URL}${API_PATH.BOOKS}`;

  if (typeof value === "string") return `${url}?${key}=${value}`;

  return `${url}?${key}=[${value}]`;
};
