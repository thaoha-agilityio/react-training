import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

// apis
import { getPostsByAuthor } from '@/apis';

// Constants
import { QUERY_KEYS } from '@/constants';

// Types
import { IPost } from '@/types';
import { useAuthStore } from '@/stores';

export const useGetPostsByAuthor = () => {
  const user = useAuthStore((state) => state.user);

  const { data, ...rest } = useQuery<IPost[], AxiosError>({
    queryKey: QUERY_KEYS.POSTS,
    queryFn: () => {
      const { following } = user || {};

      return getPostsByAuthor(following);
    },
    enabled: !user.following,
  });

  return {
    data: data || [],
    ...rest,
  };
};
