"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ClanCatSchema = new mongoose_1.Schema({
    uuid: { type: String },
    name: { type: String },
    animal_type_uuid: { type: String },
    deleted_at: { type: Date },
    created_at: { type: Date },
    updated_at: { type: Date }
});
const ClanCat = mongoose_1.model("clan_cat", ClanCatSchema);
exports.default = ClanCat;
