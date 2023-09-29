import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

// Stores
import { useProductStore } from '@stores';

// Constants
import { URL } from '@constants';

// Types
import { IProduct } from '@types';

// Services
import { api } from '@services/api-request';

export const useFetchProducts = () => {
  const setProducts = useProductStore((state) => state.setProducts);
  console.log(setProducts);

  return useQuery<IProduct[], AxiosError>({
    queryKey: ['post'],
    queryFn: async () => await api.getData(`${URL.BASE}${URL.PRODUCTS}`),
    onSuccess(data: IProduct[]) {
      setProducts(data);
    },
  });
};
