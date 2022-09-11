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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDataRepository = void 0;
const uuid_1 = require("uuid");
const UserData_1 = require("../models/UserData");
class UserDataRepository {
    constructor() {
        this.userData;
    }
    static getInstance() {
        if (!UserDataRepository.INSTANCE) {
            UserDataRepository.INSTANCE = new UserDataRepository();
        }
        return UserDataRepository.INSTANCE;
    }
    create(props) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userData = new UserData_1.UserData(Object.assign({ id: (0, uuid_1.v4)() }, props));
                yield userData.save();
                return "User data created";
            }
            catch (err) {
                return "Error Server";
            }
        });
    }
}
exports.UserDataRepository = UserDataRepository;
