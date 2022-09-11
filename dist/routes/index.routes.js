"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const contact_routes_1 = require("./contact.routes");
const userData_routes_1 = require("./userData.routes");
const router = express_1.default.Router();
exports.router = router;
router.use("/contact", contact_routes_1.contactRouter);
router.use("/userData", userData_routes_1.userDataRouter);
