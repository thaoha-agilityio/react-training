import { GENDER } from '@/constants';

export interface User {
  id: string;
  email: string;
  password: string;
  firstName: string;
  surname: string;
  dateOfBirth: string;
  gender: GENDER;
}

export type SignUpPayload = Omit<User, 'id'>;

export type SignUpResponse = {
  accessToken: string;
  user: Omit<User, 'password'>;
};

export type LoginPayload = Pick<User, 'email' | 'password'>;

export interface LoginResponse {
  accessToken: string;
  user: Omit<User, 'password'>;
}

export interface AuthSignUpRequest extends User {}
