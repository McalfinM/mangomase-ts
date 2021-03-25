"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PartnerSchema = new mongoose_1.Schema({
    uuid: { type: String },
    user_uuid: { type: String },
    name: { type: String },
    desription: { type: String },
    hours_close_open: { type: String },
    image: { type: String },
    category: { type: String },
    deleted_at: { type: Date },
    created_at: { type: Date },
    updated_at: { type: Date }
});
const Partner = mongoose_1.model("partner", PartnerSchema);
exports.default = Partner;
