"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDataRouter = void 0;
const express_1 = __importDefault(require("express"));
const CreateUserData_1 = require("../modules/userData/useCases/CreateUserData");
const userDataRouter = (0, express_1.default)();
exports.userDataRouter = userDataRouter;
userDataRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield CreateUserData_1.createUserDataController.handle(req, res);
}));
