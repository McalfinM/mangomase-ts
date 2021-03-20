"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseRoutes_1 = __importDefault(require("./baseRoutes"));
const post_1 = __importDefault(require("../controllers/post"));
class postRoutes extends baseRoutes_1.default {
    routes() {
        // this.router.get('/',postController)
        this.router.post('/', post_1.default.create);
        this.router.patch('/:uuid', post_1.default.update);
        this.router.get('/:uuid', post_1.default.findOne);
    }
}
exports.default = new postRoutes().router;
