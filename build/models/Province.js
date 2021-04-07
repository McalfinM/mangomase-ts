"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CommentSchema = new mongoose_1.Schema({
    uuid: { type: String },
    code: { type: String },
    name: { type: String }
});
const Province = mongoose_1.model("province", CommentSchema);
exports.default = Province;
