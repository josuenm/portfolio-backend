"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserData = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
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
const UserData = mongoose_1.default.model("UserData", schema);
exports.UserData = UserData;
