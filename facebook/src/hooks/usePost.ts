import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

// apis
import { getPostsByAuthor } from '@/apis';

// Constants
import { QUERY_KEYS } from '@/constants';

// Types
import { IPost } from '@/types';

// Stores
import { useAuthStore } from '@/stores';

export const useGetPostsByAuthor = () => {
  const user = useAuthStore((state) => state.user);

  const { data, ...rest } = useQuery<IPost[], AxiosError>({
    queryKey: QUERY_KEYS.POSTS,
    queryFn: () => {
      const { following, id } = user || {};

      // Can see the posts of the people you are following and your own posts
      return getPostsByAuthor([...following, id]);
    },
  });

  return {
    data: data || [],
    ...rest,
  };
};
