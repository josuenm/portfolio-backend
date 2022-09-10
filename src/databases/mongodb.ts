import "dotenv/config";
import mongoose from "mongoose";

const MONGO_URL =
  process.env.NODE_ENV === "production"
    ? process.env.MONGO_URL
    : process.env.MONGO_URL_DEVELOPMENT;

try {
  mongoose.connect(`${MONGO_URL}`);
  console.log("Connected to MongoDB");
} catch (err) {
  console.error(err);
}
