import { IUser } from '../types/IUser';
import { random } from './random';

export const createUser = (userNames: string[], avatars: string[]) => {
  const newUser = {
    id: new Date().getTime().toString(),
    name: random(userNames),
    email: random(userNames),
    avatar: random(avatars),
  } as IUser;

  return newUser;
};
