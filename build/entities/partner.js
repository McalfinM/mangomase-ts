"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseEntity_1 = __importDefault(require("./baseEntity"));
class PartnerEntity extends baseEntity_1.default {
    constructor(params) {
        super();
        this.id = params.id;
        this.uuid = params.uuid;
        this.user_uuid = params.user_uuid;
        this.name = params.name;
        this.desription = params.desription;
        this.hours_close_open = params.hours_close_open;
        this.image = params.image;
        this.category = params.category;
        this.created_at = params.created_at;
        this.updated_at = params.updated_at;
        this.deleted_at = params.deleted_at;
    }
    get getId() {
        var _a;
        return (_a = this === null || this === void 0 ? void 0 : this.id) !== null && _a !== void 0 ? _a : null;
    }
    set setId(id) {
        this.id = id;
    }
    get getUuid() {
        return this.uuid;
    }
    set setUuid(uuid) {
        this.uuid = uuid;
    }
    get getUserUuid() {
        return this.user_uuid;
    }
    set setUserUuid(user_uuid) {
        this.user_uuid = user_uuid;
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
    get getDesription() {
        return this.desription;
    }
    set setDesription(desription) {
        this.desription = desription;
    }
    get getHoursCloseOpen() {
        return this.hours_close_open;
    }
    set setHoursCloseOpen(hours_close_open) {
        this.hours_close_open = hours_close_open;
    }
    get getImage() {
        return this.image;
    }
    set setImage(image) {
        this.image = image;
    }
    get getCategory() {
        return this.category;
    }
    set setCategory(category) {
        this.category = category;
    }
    get getDeletedAt() {
        return this.deleted_at;
    }
    set setDeletedAt(deleted_at) {
        this.deleted_at = deleted_at;
    }
    get getCreatedAt() {
        return this.created_at;
    }
    set setCreatedAt(created_at) {
        this.created_at = created_at;
    }
    get getUpdatedAt() {
        return this.updated_at;
    }
    set setUpdatedAt(updated_at) {
        this.updated_at = updated_at;
    }
    toJson() {
        return {
            uuid: this.uuid,
            user_uuid: this.user_uuid,
            name: this.name,
            desription: this.desription,
            hours_close_open: this.hours_close_open,
            image: this.image,
            category: this.category,
            created_at: this.created_at,
            updated_at: this.updated_at,
            deleted_at: this.deleted_at
        };
    }
}
exports.default = PartnerEntity;
