import express from "express";
import { contactRouter } from "./contact.routes";
import { userDataRouter } from "./userData.routes";

const router = express.Router();

router.use("/contact", contactRouter);
router.use("/userData", userDataRouter);

export { router };
