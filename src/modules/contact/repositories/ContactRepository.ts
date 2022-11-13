import { v4 as uuidV4 } from "uuid";
import emailService from "../../../configs/smtp";
import { Contact } from "../models/Contact";
import { IContact, IEmail } from "../models/IContact";
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

  public async create({ name, email, phoneNumber }: IContact): Promise<string> {
    try {
      const contact = new Contact({ id: uuidV4(), name, email, phoneNumber });
      await contact.save();
      return "Contact Created";
    } catch (err) {
      return "Error Server";
    }
  }

  public async sendEmail(email: IEmail): Promise<string> {
    try {
      await emailService.sendMail({
        from: email.from,
        to: email.to,
        subject: email.subject,
        text: "Apenas para quem tem suporte a paintext",
        html: email.html,
      });

      return "Email Sent";
    } catch (err) {
      return "Error Server";
    }
  }
}
