"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    id: { type: "string", unique: true },
    name: { type: "string" },
    email: { type: "string" },
    phoneNumber: { type: "string" },
});
const Contact = mongoose_1.default.model("Contact", schema);
exports.Contact = Contact;
