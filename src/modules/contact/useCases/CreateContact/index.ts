import { ContactRepository } from "../../repositories/ContactRepository";
import { CreateContactController } from "./CreateContactController";
import { CreateContactUseCase } from "./CreateContactUseCase";

const contactRepository = ContactRepository.getInstance();

const createContactUsecase = new CreateContactUseCase(contactRepository);

const createContactController = new CreateContactController(
  createContactUsecase
);

export { createContactController };
