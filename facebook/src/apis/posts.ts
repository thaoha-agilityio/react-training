// Services
import { api } from '@/services';

// Constants
import { ROUTES, SEARCH_PARAMS } from '@/constants';

// Types
import { IPost } from '@/types';

//Utils
import { generateUrl } from '@/utils';

export const getPostsByAuthor = async (author: number[]): Promise<IPost[]> =>
  await api.getData(`${ROUTES.POSTS}?${generateUrl(author, SEARCH_PARAMS.AUTHOR)}`);

export const updatePost = async (postId: number, { totalComments }: { totalComments: number }) =>
  await api.patchData(`${ROUTES.POSTS}/${postId}`, { totalComments });
