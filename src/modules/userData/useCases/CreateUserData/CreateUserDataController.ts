import { Request, Response } from "express";
import geoip from "geoip-lite";
import { CreateUserDataUseCase } from "./CreateUserDataUseCase";

export class CreateUserDataController {
  constructor(private createUserDataUseCase: CreateUserDataUseCase) {}

  async handle(request: Request, response: Response): Promise<void> {
    const userData = request.body;

    try {
      const ip = request.ip;
      const location = geoip.lookup(ip);

      this.createUserDataUseCase.execute({
        ...userData,
        ip: ip || "",
        location: location || {
          range: "",
          country: "",
          region: "",
          eu: "",
          timezone: "",
          city: "",
          ll: "",
          metro: "",
          area: "",
        },
      });
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
