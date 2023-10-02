import { AxiosError } from 'axios';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

// Stores
import { useProductStore } from '@stores';

// Constants
import { QUERY_KEYS, URL } from '@constants';

// Types
import { IProduct } from '@types';

// Services
import { api } from '@services/api-request';

type FetchProducts = {
  pageParam?: number;
  limit: number;
};

export const useFetchProducts = ({ pageParam = 1, limit }: FetchProducts) => {
  const setProducts = useProductStore((state) => state.setProducts);

  return useQuery<IProduct[], AxiosError>({
    queryKey: [QUERY_KEYS.PRODUCTS, pageParam],
    queryFn: async () =>
      await api.getData(`${URL.BASE}${URL.PRODUCTS}?page=${pageParam}&limit=${limit}`),
    onSuccess: (data: IProduct[]) => setProducts(data),
  });
};

//  Custom hook to get Products with pagination
export const useInfiniteProducts = (limit: number) =>
  useInfiniteQuery<IProduct[], AxiosError>({
    queryKey: [QUERY_KEYS.PRODUCTS],
    queryFn: async ({ pageParam = 1 }) =>
      await api.getData(`${URL.BASE}${URL.PRODUCTS}?page=${pageParam}&limit=${limit}`),
    getNextPageParam: (lastPage, pages) => {
      const nextPage = pages.length + 1;
      return lastPage?.length > 0 && lastPage?.length === limit ? nextPage : undefined;
    },
  });
