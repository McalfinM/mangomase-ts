"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseRoutes_1 = __importDefault(require("./baseRoutes"));
const post_1 = __importDefault(require("../controllers/post"));
const authMiddleware_1 = require("../middleware/authMiddleware");
const multer_1 = __importDefault(require("multer"));
const uuid_1 = require("uuid");
const exceptions_1 = require("@tsed/exceptions");
const fileStorage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/posts');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + '-' + uuid_1.v4() + '.jpg');
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    }
    else {
        cb(new exceptions_1.BadRequest('Only .jpeg or .png files are accepted'), false);
    }
};
class postRoutes extends baseRoutes_1.default {
    routes() {
        this.router.get('/user-posts', authMiddleware_1.auth, post_1.default.findByUserLogin);
        this.router.get('/', post_1.default.findAll);
        this.router.delete('/:uuid', authMiddleware_1.auth, post_1.default.delete);
        this.router.post('/', authMiddleware_1.auth, multer_1.default({ storage: fileStorage, fileFilter: fileFilter }).single('image'), post_1.default.create);
        this.router.patch('/:uuid', post_1.default.update);
        this.router.get('/:uuid', post_1.default.findOne);
    }
}
exports.default = new postRoutes().router;
