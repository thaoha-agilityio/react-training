import { PROJECT, ROLE, STATUS } from '../constants/user';
import { IUser } from '../types/IUser';

// Data use random
const userNames = ['Alex', 'John', 'David', 'Daniel', 'Brian', 'Christopher', 'Robert', 'James'];

const avatars = [
  'https://www.facebeautyscience.com/wp-content/uploads/2020/04/face-beauty-skin-face2-proc.jpg',
  'https://t4.ftcdn.net/jpg/02/18/93/97/360_F_218939757_YqHgeD3BAANU87y2Kc10Y40HNVgDv5rK.jpg',
  'https://fashionjournal.com.au/wp-content/uploads/2020/07/fashion-journal-facereading-mob.jpeg',
  'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
  'https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg',
];

const emails = ['@Alex', '@ohn', '@David', '@Daniel', '@Brian', '@Christopher', '@Robert'];

const users: IUser[] = [
  {
    id: '1',
    name: 'Patrick Roland',
    email: '@Patrick',
    projects: [
      {
        id: '1',
        projectName: PROJECT.LIBRA,
        role: ROLE.DESIGNER,
        status: STATUS.IN_PROGRESS,
      },
      {
        id: '2',
        projectName: PROJECT.NETFLIX,
        role: ROLE.DESIGNER,
        status: STATUS.IN_PROGRESS,
      },
    ],
    avatar:
      'https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg',
  },
  {
    id: '2',
    name: 'Elly Soyer',
    email: '@Elly',
    projects: [
      {
        id: '3',
        projectName: PROJECT.NETFLIX,
        role: ROLE.DESIGNER,
        status: STATUS.IN_PROGRESS,
      },
    ],
    avatar: 'https://petapixel.com/assets/uploads/2022/07/DALLEcopy-800x420.jpg',
  },
  {
    id: '3',
    name: 'Ned Stark',
    email: '@Ned',
    projects: [
      {
        id: '5',
        projectName: PROJECT.NETFLIX,
        role: ROLE.DESIGNER,
        status: STATUS.TO_DO,
      },
      {
        id: '6',
        projectName: PROJECT.LIBRA,
        role: ROLE.DESIGNER,
        status: STATUS.IN_PROGRESS,
      },
      {
        id: '15',
        projectName: PROJECT.NIKE_SNEAKER,
        role: ROLE.DESIGNER,
        status: STATUS.TO_DO,
      },
    ],
    avatar: 'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg',
  },
  {
    id: '4',
    name: 'Jon Snow',
    email: '@Jon',
    projects: [
      {
        id: '8',
        projectName: PROJECT.LIBRA,
        role: ROLE.DESIGNER,
        status: STATUS.IN_PROGRESS,
      },
      {
        id: '9',
        projectName: PROJECT.NETFLIX,
        role: ROLE.DESIGNER,
        status: STATUS.IN_PROGRESS,
      },
    ],
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAfp-b5yYkHGmqK1Kh-V-lAZQzEARHhqVudmCH9MKxCZA8W5obUe9zjDZKXG5LmiW41YA&usqp=CAU',
  },
  {
    id: '5',
    name: 'Petyr Baelish',
    email: '@Petyr',
    projects: [
      {
        id: '8',
        projectName: PROJECT.LIBRA,
        role: ROLE.DEVELOPER,
        status: STATUS.IN_PROGRESS,
      },
    ],
    avatar:
      'https://swall.teahub.io/photos/small/0-2836_nature-wallpaper-with-flowers-image-good-morning-photo.jpg',
  },
];

export { userNames, avatars, emails, users };
