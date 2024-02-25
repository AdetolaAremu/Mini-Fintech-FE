interface ITransaction {
  user: string;
  toUser: string;
  amount: number;
  transactionID: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number | string;
}

interface IDebitTransaction {
  debitTransaction: Partial<ITransaction>;
}

export interface IResponseTransferToUser {
  message: string;
  data: Partial<IDebitTransaction>;
}

interface User {
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

export interface LoggedInUser {
  data: {
    user: User;
  };
}

export interface AllUsers {
  data: User[];
}

export interface TransferResponse {
  message: string;
  debitTransaction: {
    user: string;
    toUser: string;
    amount: number;
    transactionID: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
    __v: string;
  };
}

export interface GetBalanceResponse {
  data: {
    balance: number;
  };
}

interface credit {
  _id: string;
  user: string;
  amount: number;
  transactionID: string;
  createdAt: string;
  updatedAt: string;
}

interface debit {
  _id: string;
  user: string;
  amount: number;
  transactionID: string;
  createdAt: string;
  updatedAt: string;
  toUser?: string;
}

export interface CreditResponse {
  data: { credit: credit[] };
}

export interface DebitResponse {
  data: { debit: debit[] };
}
