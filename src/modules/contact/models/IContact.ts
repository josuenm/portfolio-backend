export interface IContact {
  id?: string;
  name: string;
  email: string;
  phoneNumber: string;
}

export interface IEmail {
  from: string;
  to: string;
  subject: string;
  html: string;
}
