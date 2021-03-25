"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseRoutes_1 = __importDefault(require("./baseRoutes"));
const comment_1 = __importDefault(require("../controllers/comment"));
class CommentRoutes extends baseRoutes_1.default {
    routes() {
        // this.router.get('/', commentController.getAll)
        this.router.post('/', comment_1.default.create);
        this.router.put('/:uuid', comment_1.default.update);
        // this.router.get('/:uuid', commentController.findOne)
    }
}
exports.default = new CommentRoutes().router;
