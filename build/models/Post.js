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
    clan_uuid: { type: String },
    category: { type: String },
    animal_type: { type: String },
    image: { type: String },
    comment: { type: Array },
    adoption: { type: Boolean },
    deleted_at: { type: Date },
    created_at: { type: Date },
    updated_at: { type: Date }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
PostSchema.virtual('clan', {
    ref: 'clan_cat',
    localField: 'clan_uuid',
    foreignField: 'uuid',
    justOne: true,
});
const Post = mongoose_1.model("post", PostSchema);
exports.default = Post;
