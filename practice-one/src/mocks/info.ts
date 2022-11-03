import { PROJECT, ROLE, STATUS } from '../constants/user';
import { IUser } from '../types/IUser';

export const userNames = ['user1', 'user2', 'user3', 'user10', 'user21', 'user31'];

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
  {
    id: '2',
    name: 'user6',
    email: '@user6',
    role: ROLE.DESIGNER,
    project: PROJECT.LIBRA,
    status: STATUS.DONE,
    avatar: 'https://petapixel.com/assets/uploads/2022/07/DALLEcopy-800x420.jpg',
  },
  {
    id: '3',
    name: 'user7',
    email: '@user7',
    role: ROLE.DESIGNER,
    project: PROJECT.LIBRA,
    status: STATUS.DONE,
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzF--y90nRLQO1-jWASJ81YnMrO_xn4i7bJnvx2pBNcVaG3zALzIAoHBHNRTZiVT4l_b8&usqp=CAU',
  },
];
