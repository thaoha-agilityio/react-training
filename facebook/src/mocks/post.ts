// Constants
import { DEFAULT_IMAGE } from '@/constants';

// Type
import { IPost } from '@/types';

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
