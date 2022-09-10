import { Request, Response } from "express";
import { CreateContactUseCase } from "./CreateContactUseCase";

export class CreateContactController {
  constructor(private createContactUseCase: CreateContactUseCase) {}

  async handle(request: Request, response: Response): Promise<void> {
    const { name, email, phoneNumber } = request.body;

    try {
      this.createContactUseCase.execute({ name, email, phoneNumber });
      response.status(200).send();
    } catch (error: any) {
      switch (error.message) {
        default:
          response.status(500).json({ error: "Error server" });
          break;
      }
    }
  }
}
