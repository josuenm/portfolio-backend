import express from "express";
import { createContactController } from "../modules/contact/useCases/CreateContact";

const contactRouter = express();

contactRouter.post("/", async (req, res) => {
  return await createContactController.handle(req, res);
});

export { contactRouter };
