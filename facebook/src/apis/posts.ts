// Services
import { ROUTES } from '@/constants';
import { api } from '@/services';
import { IPost } from '@/types';

//Utils
import { generateUrl } from '@/utils';

export const getPostsByAuthor = async (author: number[]): Promise<IPost[]> =>
  await api.getData(`${ROUTES.POSTS}${generateUrl(author, 'author')}`);
