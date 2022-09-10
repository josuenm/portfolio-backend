import cors from "cors";
import "dotenv/config";
import express from "express";
import "./databases/mongodb";
import { router } from "./routes/index.routes";

const CORS_ORIGIN =
  process.env.NODE_ENV === "production"
    ? process.env.CORS_ORIGIN
    : process.env.CORS_ORIGIN_DEVELOPMENT;

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: CORS_ORIGIN,
  })
);

app.use("/api", router);

app.listen(PORT || 8080, () => console.log("Server is running 🚀"));
