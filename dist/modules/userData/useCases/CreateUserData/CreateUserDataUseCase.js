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
exports.CreateUserDataUseCase = void 0;
class CreateUserDataUseCase {
    constructor(userDataRepository) {
        this.userDataRepository = userDataRepository;
    }
    execute({ description, layout, manufacturer, name, prerelease, product, ua, version, os, location, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.userDataRepository.create({
                description,
                layout: layout || "",
                manufacturer: manufacturer || "",
                name: name || "",
                prerelease: prerelease || "",
                product: product || "",
                ua: ua || "",
                version: version || "",
                os: os || "",
                location,
            });
            if (response === "Contact Created") {
                return;
            }
            throw new Error("Error Server");
        });
    }
}
exports.CreateUserDataUseCase = CreateUserDataUseCase;
