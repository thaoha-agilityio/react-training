import { GENDER } from '@/constants';
import { LoginPayload, LoginResponse, SignUpPayload, SignUpResponse } from '@/types';

export const USERS = [
  {
    id: 1,
    email: 'tester@gmail.com',
    password: 'Tester123@',
    dateOfBirth: '01/01/2000',
    firstName: 'James',
    surname: 'Li',
    gender: GENDER.MALE,
    following: [1, 2],
  },
  {
    id: 2,
    email: 'tester@gmail.com',
    password: 'Tester123@',
    dateOfBirth: '01/01/2000',
    firstName: 'Jane',
    surname: 'Smith',
    gender: GENDER.MALE,
    following: [1, 2],
  },
];

export const USER_INVALID = {
  email: 'tester.gmail.com',
  password: 'Tester123@',
};

export const LOGIN_PAYLOAD: LoginPayload = {
  email: 'ngoc.ngo+4@asnet.com.vn',
  password: 'abcd1234',
};

export const LOGIN_RESPONSE: LoginResponse = {
  accessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5nb2MubmdvKzFAYXNuZXQuY29tLnZuIiwiaWF0IjoxNzEwNDM1MzExLCJleHAiOjE3MTA0Mzg5MTEsInN1YiI6IjMifQ.1eciI3z7JnR8ahbBqgF3shKh34LCL7ANJpACswk3v-U',
  user: {
    id: 1,
    email: 'tester@gmail.com',
    dateOfBirth: '01/01/2000',
    firstName: 'James',
    surname: 'Li',
    gender: GENDER.MALE,
    following: [1, 2],
  },
};

export const SIGNUP_PAYLOAD: SignUpPayload = {
  email: 'tester@gmail.com',
  password: 'Tester123@',
  dateOfBirth: '01/01/2000',
  firstName: 'James',
  surname: 'Li',
  gender: GENDER.MALE,
};

export const SIGNUP_RESPONSE: SignUpResponse = {
  accessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5nb2MubmdvKzFAYXNuZXQuY29tLnZuIiwiaWF0IjoxNzEwNDM1MzExLCJleHAiOjE3MTA0Mzg5MTEsInN1YiI6IjMifQ.1eciI3z7JnR8ahbBqgF3shKh34LCL7ANJpACswk3v-U',
  user: {
    id: 1,
    email: 'tester@gmail.com',
    dateOfBirth: '01/01/2000',
    firstName: 'James',
    surname: 'Li',
    gender: GENDER.MALE,
    following: [1, 2],
  },
};
