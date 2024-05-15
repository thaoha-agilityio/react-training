import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

// Constants
import { QUERY_KEYS, ROUTES, SEARCH_PARAMS } from '@/constants';

// Services
import { api } from '@/services';

// Types
import { CommentPayload, IComment, IPost, LikeCommentPayload } from '@/types';

export const useCreateComment = (post: IPost) => {
  const queryClient = useQueryClient();

  return useMutation<IComment, AxiosError, CommentPayload>({
    mutationFn: async (payload: CommentPayload) => await api.postData(ROUTES.COMMENTS, payload),
    onSuccess: async () => {
      const { totalComments, id } = post || {};

      await api.patchData(`${ROUTES.POSTS}/${id}`, { totalComments: totalComments + 1 });

      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.COMMENTS });
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.POSTS });
    },
  });
};

export const useGetCommentByPostId = (postId: number) => {
  const { data, ...rest } = useQuery<IComment[], AxiosError>({
    queryKey: QUERY_KEYS.COMMENTS_BY_POST_ID(postId),
    queryFn: async () => await api.getData(`${ROUTES.COMMENTS}?${SEARCH_PARAMS.POST_ID}=${postId}`),
  });

  return {
    data: data || [],
    ...rest,
  };
};

export const useLikeComment = (commentId: number) => {
  const queryClient = useQueryClient();

  return useMutation<IComment, AxiosError, LikeCommentPayload>({
    mutationFn: async (payload) => {
      return await api.patchData(`${ROUTES.COMMENTS}/${commentId}`, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.COMMENTS });
    },
  });
};
