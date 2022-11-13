import "dotenv/config";
import { IContact } from "../../models/IContact";
import { IContactRepository } from "../../repositories/implementations/IContactRepository";

class CreateContactUseCase {
  constructor(private contactRepository: IContactRepository) {}

  async execute({ name, email, phoneNumber }: IContact): Promise<void> {
    const contactResponse = await this.contactRepository.create({
      name,
      email,
      phoneNumber,
    });

    const adminEmail = await this.contactRepository.sendEmail({
      from: `Novo contato <${email}>`,
      to: "direct.josue@gmail.com",
      subject: `[Portfolio] ${name} te mandou um contato`,
      html: `
        <div>
          <p>${name} te enviou o contato através do portfolio</p>
          <ul>
            <li>${name}</li>
            <li>${email}</li>
            <li>${phoneNumber}</li>
          </ul>
        </div>
      `,
    });

    const customerEmail = await this.contactRepository.sendEmail({
      from: "Contato Enviado <direct.josue@gmail.com>",
      to: email,
      subject: `Seu contato foi enviado com sucesso para o desenvolvedor Josué`,
      html: `
        <div>
          <p>[Essa mensagem é automática]</p>
          <p>Muito obrigado por enviar seu contato! Entrarei em contato dentro de 24 horas!</p>
        </div>
      `,
    });

    if (
      contactResponse !== "Contact Created" &&
      customerEmail !== "Email Sent" &&
      adminEmail !== "Email Sent"
    ) {
      throw new Error("Error Server");
    }

    return;
  }
}

export { CreateContactUseCase };
