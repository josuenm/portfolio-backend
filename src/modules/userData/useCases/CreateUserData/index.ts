import { UserDataRepository } from "../../repositories/UserDataRepository";
import { CreateUserDataController } from "./CreateUserDataController";
import { CreateUserDataUseCase } from "./CreateUserDataUseCase";

const userDataRepository = UserDataRepository.getInstance();

const createUserDataUsecase = new CreateUserDataUseCase(userDataRepository);

const createUserDataController = new CreateUserDataController(
  createUserDataUsecase
);

export { createUserDataController };
