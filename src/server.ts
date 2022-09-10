import cors from "cors";
import express from "express";
import "./databases/mongodb";
import { router } from "./routes/index.routes";

const port = 8080;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", router);

app.listen(port, () => console.log("Server is running 🚀"));
