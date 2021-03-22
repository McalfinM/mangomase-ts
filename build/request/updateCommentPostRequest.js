"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateCommentPostRequest {
    constructor(body) {
        this._comment = body.comment;
    }
    get comment() {
        return this._comment;
    }
}
exports.default = UpdateCommentPostRequest;
