import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

// apis
import { getPostsByAuthor } from '@/apis';

// Constants
import { QUERY_KEYS, ROUTES } from '@/constants';

// Types
import { IPost, LikePostPayload, PostPayload } from '@/types';

// Stores
import { useAuthStore } from '@/stores';

// Services
import { api } from '@/services';

export const useGetPostsByAuthor = () => {
  const user = useAuthStore((state) => state.user);
  const { following, id } = user || {};

  const { data, ...rest } = useQuery<IPost[], AxiosError>({
    queryKey: QUERY_KEYS.POSTS,
    queryFn: () => {
      // Can see the posts of the people you are following and your own posts
      const ids = following ? [id, ...following] : [id];

      return getPostsByAuthor(ids);
    },
  });

  return {
    data: data || [],
    ...rest,
  };
};

export const useCreatePost = () => {
  const user = useAuthStore((state) => state.user);
  const queryClient = useQueryClient();

  return useMutation<IPost, AxiosError, PostPayload>({
    mutationFn: async (payload: PostPayload) => {
      const { id } = user || {};
      const data = { ...payload, author: id };

      return await api.postData(ROUTES.POSTS, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.POSTS });
    },
  });
};

export const useLikePost = (postId: number) => {
  const queryClient = useQueryClient();

  return useMutation<IPost, AxiosError, LikePostPayload>({
    mutationFn: async (payload) => {
      return await api.patchData(`${ROUTES.POSTS}/${postId}`, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.POSTS });
    },
  });
};

export const useCommentPost = (postId: number) => {
  const queryClient = useQueryClient();

  return useMutation<IPost, AxiosError, number>({
    mutationFn: async (totalComments: number) => {
      return await api.patchData(`${ROUTES.POSTS}/${postId}`, { totalComments: totalComments + 1 });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.POSTS });
    },
  });
};
