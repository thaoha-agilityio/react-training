enum IStatus {
  todo,
  inProgress,
  done,
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  status: IStatus;
  avatar: string;
}
