export interface ITransferToUser {
  toUser: string;
  amount: number;
}

export interface ILoggedInUserInfo {
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    createdAt: string;
    updatedAt: string;
    __v: string;
  };
}
