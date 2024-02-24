export interface ILoginResponse {
  message: string;
  token: string;
}

interface Registeration {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: string;
}

interface registeredUser {
  registeredUser: Registeration;
}

export interface IRegistrationResponse {
  message: string;
  data: registeredUser;
}
