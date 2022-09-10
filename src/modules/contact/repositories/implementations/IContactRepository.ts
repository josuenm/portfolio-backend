import { IContact } from "../../models/IContact";

export interface IContactRepository {
  create: (contact: IContact) => Promise<string>;
}
