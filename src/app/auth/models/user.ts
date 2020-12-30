export interface User {
  firstname: string;
  lastname: string;
  email: string;
  role: number;
  phone: string;
  address1: string;
  address2: string;
  town: string;
  postcode: string;
}

export interface Credentials {
  email: string;
  password: string;
}
