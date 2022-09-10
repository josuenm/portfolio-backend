import express from "express";
import { createUserDataController } from "../modules/userData/useCases/CreateUserData";

const userDataRouter = express();

userDataRouter.post("/", async (req, res) => {
  return await createUserDataController.handle(req, res);
});

export { userDataRouter };
