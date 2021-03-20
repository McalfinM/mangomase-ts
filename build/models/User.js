"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
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
const User = mongoose_1.default.model('User', UserSchema);
exports.default = User;