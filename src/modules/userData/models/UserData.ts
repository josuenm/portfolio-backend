import mongoose from "mongoose";

const schema = new mongoose.Schema({
  id: { type: String, unique: true },
  description: { type: String },
  layout: { type: String },
  manufacturer: { type: String },
  name: { type: String },
  prerelease: { type: String },
  product: { type: String },
  ua: { type: String },
  version: { type: String },
  os: {
    architecture: { type: String },
    family: { type: String },
    version: { type: String },
  },

  location: {
    range: [String],
    country: { type: String },
    region: { type: String },
    eu: { type: String },
    timezone: { type: String },
    city: { type: String },
    ll: [String],
    metro: { type: Number },
    area: { type: Number },
  },
});

const UserData = mongoose.model("UserData", schema);

export { UserData };
