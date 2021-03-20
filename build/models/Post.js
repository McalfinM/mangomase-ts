"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PostSchema = new mongoose_1.Schema({
    uuid: { type: String },
    user_uuid: { type: String },
    title: { type: String },
    content: { type: String },
    slug: { type: String },
    age: { type: Number },
    clan: { type: String },
    category: { type: String },
    image: { type: String },
    deleted_at: { type: Date },
    created_at: { type: Date },
    updated_at: { type: Date }
});
const Post = mongoose_1.model("post", PostSchema);
exports.default = Post;
