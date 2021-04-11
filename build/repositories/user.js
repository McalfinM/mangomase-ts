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
const user_1 = __importDefault(require("../entities/user"));
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
    profile(user) {
        var _a, _b, _c, _d, _e, _f, _g;
        return __awaiter(this, void 0, void 0, function* () {
            const user_data = yield User_1.default.findOne({ uuid: user.uuid });
            return user_data ? new user_1.default({
                uuid: (_a = user_data.uuid) !== null && _a !== void 0 ? _a : '',
                email: (_b = user_data.email) !== null && _b !== void 0 ? _b : '',
                name: (_c = user_data.name) !== null && _c !== void 0 ? _c : '',
                is_verified: (_d = user_data.is_verified) !== null && _d !== void 0 ? _d : false,
                is_deleted: (_e = user_data.is_deleted) !== null && _e !== void 0 ? _e : false,
                created_at: (_f = user_data.created_at) !== null && _f !== void 0 ? _f : new Date,
                deleted_at: (_g = user_data.deleted_at) !== null && _g !== void 0 ? _g : new Date,
            }) : null;
        });
    }
}
exports.default = new UserRepository();
