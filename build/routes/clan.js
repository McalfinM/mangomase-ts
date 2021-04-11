"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseRoutes_1 = __importDefault(require("./baseRoutes"));
const clan_1 = __importDefault(require("../controllers/clan"));
const authMiddleware_1 = require("../middleware/authMiddleware");
class clanRoutes extends baseRoutes_1.default {
    routes() {
        this.router.get('/', authMiddleware_1.auth, clan_1.default.getAll);
    }
}
exports.default = new clanRoutes().router;
