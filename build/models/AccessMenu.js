"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const AccessMenuSchema = new mongoose_1.default.Schema({
    uuid: {
        type: String
    },
    user_uuid: {
        type: String,
        ref: 'User',
    },
    role_uuid: {
        type: String,
        ref: "roles"
    },
    access_BE: {
        type: String,
    },
    access_FE: {
        type: Array,
        default: null
    }
}, {
    timestamps: true
});
const AccessMenu = mongoose_1.default.model('access_menu', AccessMenuSchema);
exports.default = AccessMenu;
