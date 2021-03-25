"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCommentPostRequest {
    constructor(body) {
        this._user_uuid = body.user_uuid;
        this._comment = body.comment;
        this._post_uuid = body.post_uuid;
    }
    get user_uuid() {
        return this._user_uuid;
    }
    get post_uuid() {
        return this._post_uuid;
    }
    get comment() {
        return this._comment;
    }
}
exports.default = CreateCommentPostRequest;
