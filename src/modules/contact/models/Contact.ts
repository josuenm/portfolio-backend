import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    id: { type: "string", unique: true },
    name: { type: "string" },
    email: { type: "string" },
    phoneNumber: { type: "string" },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", schema);

export { Contact };
