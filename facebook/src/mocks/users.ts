import { GENDER } from '@/constants';

export const USERS = [
  {
    email: 'tester@gmail.com',
    password: 'Tester123@',
    dateOfBirth: '01/01/2000',
    firstName: 'James',
    surname: 'Li',
    gender: GENDER.MALE,
  },
];

export const USER_INVALID = {
  email: 'tester.gmail.com',
  password: 'Tester123@',
};
