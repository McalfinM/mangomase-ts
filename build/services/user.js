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
const user_2 = __importDefault(require("../entities/user"));
const exceptions_1 = require("@tsed/exceptions");
const province_1 = __importDefault(require("../services/province"));
const city_1 = __importDefault(require("../services/city"));
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
            const user = yield user_1.default.create(name, email, password);
            return user;
        });
        this.delete = () => {
        };
    }
    profile(user) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const searchUser = yield user_1.default.findOne(user.uuid);
            const province = yield province_1.default.findOne((_a = searchUser === null || searchUser === void 0 ? void 0 : searchUser.province_uuid) !== null && _a !== void 0 ? _a : '');
            const city = yield city_1.default.findOne((_b = searchUser === null || searchUser === void 0 ? void 0 : searchUser.city_uuid) !== null && _b !== void 0 ? _b : '');
            const data = yield user_1.default.profile(user, province, city);
            if (!data)
                throw new Error('data not found');
            return data;
        });
    }
    update(data, user) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const searchUser = yield user_1.default.findOne(user.uuid);
            const province = yield province_1.default.findOne(data.province_uuid);
            const city = yield city_1.default.findOne(data.city_uuid);
            if (!searchUser)
                throw new exceptions_1.BadRequest('User not found');
            const userEntity = new user_2.default({
                uuid: user.uuid,
                name: data.name,
                email: data.email,
                city_uuid: (_a = city === null || city === void 0 ? void 0 : city.getUuid) !== null && _a !== void 0 ? _a : '',
                province_uuid: (_b = province === null || province === void 0 ? void 0 : province.getUuid) !== null && _b !== void 0 ? _b : '',
            });
            return yield user_1.default.update(userEntity);
        });
    }
}
exports.default = new UserService();
