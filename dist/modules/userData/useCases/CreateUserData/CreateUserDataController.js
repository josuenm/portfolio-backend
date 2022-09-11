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
exports.CreateUserDataController = void 0;
const geoip_lite_1 = __importDefault(require("geoip-lite"));
class CreateUserDataController {
    constructor(createUserDataUseCase) {
        this.createUserDataUseCase = createUserDataUseCase;
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const userData = request.body;
            try {
                const ip = request.ip;
                const location = geoip_lite_1.default.lookup(ip);
                console.log(ip);
                this.createUserDataUseCase.execute(Object.assign(Object.assign({}, userData), { ip: ip || "", location: location || {
                        range: "",
                        country: "",
                        region: "",
                        eu: "",
                        timezone: "",
                        city: "",
                        ll: "",
                        metro: "",
                        area: "",
                    } }));
                response.status(200).send();
            }
            catch (error) {
                switch (error.message) {
                    default:
                        response.status(500).json({ error: "Error server" });
                        break;
                }
            }
        });
    }
}
exports.CreateUserDataController = CreateUserDataController;
