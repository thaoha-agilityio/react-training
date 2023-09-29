import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

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
  limit: string;
};

export const useFetchProducts = ({ pageParam = 1, limit }: FetchProducts) => {
  const setProducts = useProductStore((state) => state.setProducts);

  return useQuery<IProduct[], AxiosError>({
    queryKey: [QUERY_KEYS.PRODUCTS],
    queryFn: async () =>
      await api.getData(`${URL.BASE}${URL.PRODUCTS}?page=${pageParam}&limit=${limit}`),
    onSuccess: (data: IProduct[]) => setProducts(data),
  });
};
