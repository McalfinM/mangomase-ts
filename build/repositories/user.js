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
const User_1 = __importDefault(require("../models/User"));
const Authentication_1 = __importDefault(require("../utils/Authentication"));
class UserRepository {
    constructor() {
        this.find = () => __awaiter(this, void 0, void 0, function* () {
            const users = yield User_1.default.find()
                .where('is_verified').ne(null)
                .select('-_id -uuid -password -__v');
            return users;
        });
        this.findOne = (uuid) => __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.findOne({ uuid: uuid }).select('-_id -uuid -password -__v');
            return user;
        });
        this.create = (name, email, password) => __awaiter(this, void 0, void 0, function* () {
            const hashPassword = yield Authentication_1.default.hash(password);
            const user = User_1.default.create({
                uuid: uuid_1.v4(),
                name: name,
                email: email,
                password: hashPassword,
            });
            return user;
        });
        this.update = () => __awaiter(this, void 0, void 0, function* () {
            //
        });
        this.delete = () => {
            //
        };
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.findOne({ email: email });
            return user;
        });
    }
}
exports.default = new UserRepository();
