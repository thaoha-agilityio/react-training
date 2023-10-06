import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

// Stores
import { useMessageStores, useCartStore } from '@stores';

// Constants
import { QUERY_KEYS, URL } from '@constants';

// Types
import { ICart } from '@types';

// Services
import { api } from '@services/APIRequest';

export const useFetchCarts = () => {
  const setCarts = useCartStore((state) => state.setCarts);

  const setErrorMessage = useMessageStores((state) => state.setErrorMessage);

  return useQuery<ICart[], AxiosError>({
    queryKey: [QUERY_KEYS.CARTS],
    queryFn: async () => await api.getData(`${URL.BASE}${URL.CARTS}`),
    onSuccess: (data: ICart[]) => setCarts(data),
    onError: (error) => setErrorMessage(error.message),
  });
};
