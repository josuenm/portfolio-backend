import { IContact, IEmail } from "../../models/IContact";

export interface IContactRepository {
  create: (contact: IContact) => Promise<string>;
  sendEmail: (email: IEmail) => Promise<string>;
}
