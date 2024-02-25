export interface ITransferToUser {
  toUser: string;
  amount: number;
}

interface LoggedInUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  __v?: string;
}

export interface ILoggedInUserInfo {
  user: LoggedInUser;
}

export interface IAllUsers {
  user: LoggedInUser[];
}
