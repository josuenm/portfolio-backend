import { v4 as uuidV4 } from "uuid";
import { IUserData } from "../models/IUserData";
import { UserData } from "../models/UserData";
import { IUserDataRepository } from "./implementations/IUserDataRepository";

export class UserDataRepository implements IUserDataRepository {
  private userData: IUserData | undefined;

  private static INSTANCE: UserDataRepository;

  private constructor() {
    this.userData;
  }

  public static getInstance() {
    if (!UserDataRepository.INSTANCE) {
      UserDataRepository.INSTANCE = new UserDataRepository();
    }
    return UserDataRepository.INSTANCE;
  }

  async create(props: IUserData): Promise<string> {
    try {
      const userData = new UserData({
        id: uuidV4(),
        ...props,
      });
      await userData.save();
      return "User data created";
    } catch (err) {
      return "Error Server";
    }
  }
}
