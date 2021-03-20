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
const uuid_1 = require("uuid");
const AccessMenu_1 = __importDefault(require("../models/AccessMenu"));
const Authentication_1 = __importDefault(require("../utils/Authentication"));
class AccessMenuRepository {
}
AccessMenuRepository.find = () => __awaiter(void 0, void 0, void 0, function* () {
    const accessMenu = yield AccessMenu_1.default.find()
        .where('is_verified').ne(null)
        .select('-_id -uuid -password -__v');
    return accessMenu;
});
AccessMenuRepository.findOne = (uuid, url) => __awaiter(void 0, void 0, void 0, function* () {
    const accessMenu = yield AccessMenu_1.default.findOne({ user_uuid: uuid }).where('access_FE').select('access_FE')
        .then((res) => {
        const loop = res.access_FE;
        const data = [];
        for (let i = 0; i < loop.length; i++) {
            if (loop[i] == url) {
                data.push(loop[i]);
            }
        }
        return data;
    });
    return accessMenu;
});
AccessMenuRepository.create = (name, email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const hashPassword = yield Authentication_1.default.hash(password);
    const accessMenu = AccessMenu_1.default.create({
        uuid: uuid_1.v4(),
        name: name,
        email: email,
        password: hashPassword,
    });
    return accessMenu;
});
AccessMenuRepository.update = () => __awaiter(void 0, void 0, void 0, function* () {
    //
});
AccessMenuRepository.delete = () => {
    //
};
exports.default = AccessMenuRepository;
