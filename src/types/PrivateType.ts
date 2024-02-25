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

export interface IGetBalance {
  balance: number;
}

interface transaction {
  _id: string;
  user: string;
  amount: number;
  transactionID: string;
  createdAt: string;
  updatedAt: string;
}

interface transactionDebit {
  _id: string;
  user: string;
  amount: number;
  toUser: string;
  transactionID: string;
  createdAt: string;
  updatedAt: string;
}

export interface IGetAllCredits {
  credit: transaction[];
}

export interface IGetAllDebits {
  debit: transactionDebit[];
}
