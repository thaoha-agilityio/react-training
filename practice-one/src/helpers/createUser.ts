import { IUser } from '../types/IUser';
import { random } from './random';

export const createUser = (userNames: string[], avatars: string[], email: string[]) => {
  const newUser = {
    id: new Date().getTime().toString(),
    name: random(userNames),
    email: random(email),
    avatar: random(avatars),
  } as IUser;

  return newUser;
};
