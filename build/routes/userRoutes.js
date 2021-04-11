"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseRoutes_1 = __importDefault(require("./baseRoutes"));
const user_1 = __importDefault(require("../controllers/user"));
const authMiddleware_1 = require("../middleware/authMiddleware");
class userRoutes extends baseRoutes_1.default {
    routes() {
        // this.router.get('/', auth, userController.find)
        this.router.get('/', authMiddleware_1.auth, user_1.default.findOne);
        // this.router.post('/', userController.create)
        // this.router.put('/:uuid', userController.update)
        // this.router.delete('/:uuid', userController.delete)
        this.router.post('/role', user_1.default.create_role);
        this.router.get('/profile', authMiddleware_1.auth, user_1.default.profile);
    }
}
exports.default = new userRoutes().router;
