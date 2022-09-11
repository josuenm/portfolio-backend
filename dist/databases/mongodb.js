"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const MONGO_URL = process.env.NODE_ENV === "production"
    ? process.env.MONGO_URL
    : process.env.MONGO_URL_DEVELOPMENT;
try {
    mongoose_1.default.connect(`${MONGO_URL}`);
    console.log("Connected to MongoDB");
}
catch (err) {
    console.error(err);
}
