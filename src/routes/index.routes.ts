import express from "express";
import { contactRouter } from "./contact.routes";

const router = express.Router();

router.use("/contact", contactRouter);

export { router };
