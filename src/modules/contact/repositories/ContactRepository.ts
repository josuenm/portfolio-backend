import { v4 as uuidV4 } from "uuid";
import { Contact } from "../models/Contact";
import { IContact } from "../models/IContact";
import { IContactRepository } from "./implementations/IContactRepository";

export class ContactRepository implements IContactRepository {
  private contact: IContact | undefined;

  private static INSTANCE: ContactRepository;

  private constructor() {
    this.contact;
  }

  public static getInstance() {
    if (!ContactRepository.INSTANCE) {
      ContactRepository.INSTANCE = new ContactRepository();
    }
    return ContactRepository.INSTANCE;
  }

  async create({ name, email, phoneNumber }: IContact): Promise<string> {
    try {
      const contact = new Contact({ id: uuidV4(), name, email, phoneNumber });
      await contact.save();
      return "Contact Created";
    } catch (err) {
      return "Error Server";
    }
  }
}
