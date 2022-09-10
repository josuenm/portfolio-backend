import mongoose from "mongoose";

try {
  mongoose.connect("mongodb://localhost:27017/portfolio");
  console.log("Connected to MongoDB");
} catch (err) {
  console.error(err);
}
