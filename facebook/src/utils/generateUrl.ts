import { API_BASE_URL } from '@/constants';

export const generateUrl = (queryKeys: number[], params: string) => {
  const queryParams = queryKeys.map((item) => `${params}=${item}`).join('&');

  return `${API_BASE_URL}?${queryParams}`;
};
