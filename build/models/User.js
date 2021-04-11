"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    uuid: {
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    is_deleted: {
        type: Boolean, default: false
    },
    is_verified: {
        type: Date, default: null
    }
}, {
    timestamps: true
});
const User = mongoose_1.model('User', UserSchema);
exports.default = User;
