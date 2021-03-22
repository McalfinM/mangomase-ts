"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseEntity_1 = __importDefault(require("./baseEntity"));
class CommentEntity extends baseEntity_1.default {
    constructor(params) {
        super();
        this.id = params.id;
        this.uuid = params.uuid;
        this.user_uuid = params.user_uuid;
        this.post_uuid = params.post_uuid;
        this.comment = params.comment;
        this.deleted_at = params.deleted_at;
        this.created_at = params.created_at;
        this.updated_at = params.updated_at;
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
    get getPostUuid() {
        return this.post_uuid;
    }
    set setPostUuid(post_uuid) {
        this.post_uuid = post_uuid;
    }
    get getComment() {
        return this.comment;
    }
    set setComment(comment) {
        this.comment = comment;
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
            post_uuid: this.post_uuid,
            comment: this.comment,
        };
    }
}
exports.default = CommentEntity;
