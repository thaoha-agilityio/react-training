import { STATUS, ROLE, PROJECT } from '../constants/user';

export interface IUser {
  id: string;
  name: string;
  email: string;
  role: ROLE;
  project: PROJECT;
  status: STATUS;
  avatar: string;
}
