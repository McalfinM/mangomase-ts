"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CommentSchema = new mongoose_1.Schema({
    uuid: { type: String },
    user_uuid: { type: String },
    post_uuid: { type: String },
    comment: { type: String },
    deleted_at: { type: Date },
    created_at: { type: Date },
    updated_at: { type: Date }
});
CommentSchema.virtual('user', {
    ref: 'user',
    localField: 'user_uuid',
    foreignField: 'uuid',
    justOne: true,
});
const Comment = mongoose_1.model("comment", CommentSchema);
exports.default = Comment;
