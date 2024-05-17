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
    likes: [1],
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
export const ADS = [
  {
    img: 'https://cdn.eva.vn/upload/1-2023/images/2023-03-13/con-gai-thieu-gia-nganh-may-mac-va-hotgirl-ha-thanh-la-the-luc-nhi-sieu-hot-lap-ky-luc-chua-tung-co--312664461_5569265269788525_490616098331863877_n-1678699659-789-width780height780.jpg',
    label: 'ICC Officials',
    textLink: '@icc_officials',
  },
  {
    img: 'https://kenh14cdn.com/203336854389633024/2023/9/22/photo-18-1695382154012318071367.jpg',
    label: 'Pamela Officials',
    textLink: '@pamela_officials',
  },
];
