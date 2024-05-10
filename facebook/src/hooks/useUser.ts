import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

// Constants
import { QUERY_KEYS, ROUTES } from '@/constants';

// Types
import { User } from '@/types';

// Service
import { api } from '@/services';

export const useGetUsers = () => {
  const { data, ...rest } = useQuery<User[], AxiosError>({
    queryKey: QUERY_KEYS.USERS,
    queryFn: async () => await api.getData(ROUTES.USERS),
  });

  return {
    data: data || [],
    ...rest,
  };
};
