enum Status {
  todo,
  inProgress,
  done,
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  status: Status;
  avatar: string;
}
