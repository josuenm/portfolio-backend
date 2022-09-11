import { IUserData } from "../../models/IUserData";
import { IUserDataRepository } from "../../repositories/implementations/IUserDataRepository";

class CreateUserDataUseCase {
  constructor(private userDataRepository: IUserDataRepository) {}

  async execute({
    description,
    layout,
    manufacturer,
    name,
    prerelease,
    product,
    ua,
    version,
    os,
    location,
  }: IUserData): Promise<void> {
    const response = await this.userDataRepository.create({
      ip: "",
      description,
      layout: layout || "",
      manufacturer: manufacturer || "",
      name: name || "",
      prerelease: prerelease || "",
      product: product || "",
      ua: ua || "",
      version: version || "",
      os: os || "",
      location,
    });

    if (response === "Contact Created") {
      return;
    }

    throw new Error("Error Server");
  }
}

export { CreateUserDataUseCase };
