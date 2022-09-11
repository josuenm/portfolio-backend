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
exports.ContactRepository = void 0;
const uuid_1 = require("uuid");
const Contact_1 = require("../models/Contact");
class ContactRepository {
    constructor() {
        this.contact;
    }
    static getInstance() {
        if (!ContactRepository.INSTANCE) {
            ContactRepository.INSTANCE = new ContactRepository();
        }
        return ContactRepository.INSTANCE;
    }
    create({ name, email, phoneNumber }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const contact = new Contact_1.Contact({ id: (0, uuid_1.v4)(), name, email, phoneNumber });
                yield contact.save();
                return "Contact Created";
            }
            catch (err) {
                return "Error Server";
            }
        });
    }
}
exports.ContactRepository = ContactRepository;
