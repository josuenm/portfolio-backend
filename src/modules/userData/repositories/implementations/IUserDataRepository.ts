import { IUserData } from "../../models/IUserData";

export interface IUserDataRepository {
  create: (contact: IUserData) => Promise<string>;
}
