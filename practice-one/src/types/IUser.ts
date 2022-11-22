import { STATUS, ROLE, PROJECT } from '../constants/user';

export interface IUser {
  readonly id: string;
  name: string;
  email: string;
  projects?: IProject[];
  avatar: string;
}

export interface IProject {
  readonly id: string;
  role: ROLE;
  projectName: PROJECT;
  status: STATUS;
}
