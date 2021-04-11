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
    constructor() {
        this.find = () => __awaiter(this, void 0, void 0, function* () {
            const users = yield user_1.default.find();
            return users;
        });
        this.findOne = (uuid, url) => __awaiter(this, void 0, void 0, function* () {
            // const user = await UserRepository.findOne(uuid)
            const access = yield accessMenu_1.default.findOne(uuid, url);
            return access;
        });
        this.create = (name, email, password) => __awaiter(this, void 0, void 0, function* () {
            const findUser = yield user_1.default.findByEmail(email);
            if (findUser)
                throw new Error('email already taken');
            console.log(findUser);
            const user = yield user_1.default.create(name, email, password);
            return user;
        });
        this.update = () => {
        };
        this.delete = () => {
        };
    }
    profile(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield user_1.default.profile(user);
            if (!data)
                throw new Error('data not found');
            return data;
        });
    }
}
exports.default = new UserService();
