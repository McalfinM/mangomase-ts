"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authValidator_1 = __importDefault(require("../middleware/validator/authValidator"));
const loginValidator_1 = __importDefault(require("../middleware/validator/loginValidator"));
const baseRoutes_1 = __importDefault(require("./baseRoutes"));
const authController_1 = __importDefault(require("../controllers/authController"));
class authRoutes extends baseRoutes_1.default {
    routes() {
        this.router.post('/login', loginValidator_1.default, authController_1.default.login);
        this.router.post('/register', authValidator_1.default, authController_1.default.register);
    }
}
exports.default = new authRoutes().router;
