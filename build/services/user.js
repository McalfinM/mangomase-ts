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
const user_1 = __importDefault(require("../repositories/user"));
const accessMenu_1 = __importDefault(require("./accessMenu"));
class UserService {
}
UserService.find = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.find();
    return users;
});
UserService.findOne = (uuid, url) => __awaiter(void 0, void 0, void 0, function* () {
    // const user = await UserRepository.findOne(uuid)
    const access = yield accessMenu_1.default.findOne(uuid, url);
    return access;
});
UserService.create = (name, email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_1.default.create(name, email, password);
    return user;
});
UserService.update = () => {
};
UserService.delete = () => {
};
exports.default = UserService;
