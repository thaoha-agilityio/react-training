// Constants
import { DEFAULT_IMAGE } from '@/constants';

// Type
import { IPost, PostPayload } from '@/types';

export const POSTS: IPost[] = [
  {
    id: 1,
    content: 'Content marketing definition',
    authorId: 2,
    authorName: 'Pam',
    image: DEFAULT_IMAGE,
    likes: [],
    totalComments: 0,
  },
];

export const POST_PAYLOAD: PostPayload = {
  content: 'Content marketing definition',
  authorName: 'Pam',
  image: DEFAULT_IMAGE,
  likes: [],
  totalComments: 0,
};
