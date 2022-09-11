import { Request, Response } from "express";
import geoip from "geoip-lite";
import { networkInterfaces } from "os";
import { CreateUserDataUseCase } from "./CreateUserDataUseCase";

export class CreateUserDataController {
  constructor(private createUserDataUseCase: CreateUserDataUseCase) {}

  async handle(request: Request, response: Response): Promise<void> {
    const userData = request.body;

    const nets: any = Object.values(networkInterfaces())[0];
    const ip = nets.find((item: { family: string }) => item.family === "IPv6");

    try {
      const location = geoip.lookup(ip.address);

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
