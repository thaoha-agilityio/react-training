import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

// Constants
import { QUERY_KEYS, ROUTES, SEARCH_PARAMS } from '@/constants';

// Services
import { api } from '@/services';

// Types
import { CommentPayload, IComment } from '@/types';

export const useCreateComment = () => {
  const queryClient = useQueryClient();

  return useMutation<IComment, AxiosError, CommentPayload>({
    mutationFn: async (payload: CommentPayload) => await api.postData(ROUTES.COMMENTS, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.COMMENTS });
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
