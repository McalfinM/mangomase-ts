"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseEntity_1 = __importDefault(require("./baseEntity"));
class UserEntity extends baseEntity_1.default {
    constructor(params) {
        super();
        this._uuid = params.uuid;
        this._email = params.email;
        this._name = params.name;
        this._password = params.password;
        this._image = params.image;
        this._province_uuid = params.province_uuid;
        this._province = params.province;
        this._city_uuid = params.city_uuid;
        this._city = params.city;
        this._is_verified = params.is_verified;
        this._is_deleted = params.is_deleted;
        this._created_at = params.created_at;
        this._deleted_at = params.deleted_at;
    }
    get uuid() {
        return this._uuid;
    }
    get email() {
        return this._email;
    }
    get name() {
        return this._name;
    }
    get password() {
        return this._password;
    }
    get image() {
        return this._image;
    }
    get province_uuid() {
        return this._province_uuid;
    }
    get province() {
        return this._province;
    }
    get city_uuid() {
        return this._city_uuid;
    }
    get city() {
        return this._city;
    }
    get is_verified() {
        return this._is_verified;
    }
    get is_deleted() {
        return this._is_deleted;
    }
    get created_at() {
        return this._created_at;
    }
    get deleted_at() {
        return this._deleted_at;
    }
}
exports.default = UserEntity;
