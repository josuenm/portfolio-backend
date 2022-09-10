import { IContact } from "../../models/IContact";
import { IContactRepository } from "../../repositories/implementations/IContactRepository";

class CreateContactUseCase {
  constructor(private contactRepository: IContactRepository) {}

  async execute({ name, email, phoneNumber }: IContact): Promise<void> {
    const response = await this.contactRepository.create({
      name,
      email,
      phoneNumber,
    });

    if (response === "Contact Created") {
      return;
    }

    throw new Error("Error Server");
  }
}

export { CreateContactUseCase };
