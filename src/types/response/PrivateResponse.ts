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
