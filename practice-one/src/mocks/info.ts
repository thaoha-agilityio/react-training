import { PROJECT, ROLE, STATUS } from '../constants/user';
import { IUser } from '../types/IUser';

export const userNames = ['user1', 'user2', 'user3'];

export const avatars = [
  'https://www.facebeautyscience.com/wp-content/uploads/2020/04/face-beauty-skin-face2-proc.jpg',
  'https://t4.ftcdn.net/jpg/02/18/93/97/360_F_218939757_YqHgeD3BAANU87y2Kc10Y40HNVgDv5rK.jpg',
  'https://fashionjournal.com.au/wp-content/uploads/2020/07/fashion-journal-facereading-mob.jpeg',
];

export const listUser: IUser[] = [
  {
    id: '1',
    name: 'user1',
    email: '@user1',
    role: ROLE.DESIGNER,
    project: PROJECT.LIBRA,
    status: STATUS.DONE,
    avatar:
      'https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg',
  },
  {
    id: '5',
    name: 'user5',
    email: '@user5',
    role: ROLE.DESIGNER,
    project: PROJECT.LIBRA,
    status: STATUS.DONE,
    avatar:
      'https://fashionjournal.com.au/wp-content/uploads/2020/07/fashion-journal-facereading-mob.jpeg',
  },
];
