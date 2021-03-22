"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
require("./database");
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const post_1 = __importDefault(require("./routes/post"));
const comment_1 = __importDefault(require("./routes/comment"));
const errorMiddleware_1 = __importDefault(require("./middleware/errorMiddleware"));
const multer_1 = __importDefault(require("multer"));
const exceptions_1 = require("@tsed/exceptions");
const uuid_1 = require("uuid");
const fileStorage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
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
class App {
    constructor() {
        this.app = express_1.default();
        this.plugins();
        this.routes();
        this.errorHandling();
    }
    plugins() {
        this.app.use(body_parser_1.default.json());
        this.app.use(compression_1.default());
        this.app.use(cors_1.default());
        this.app.use(multer_1.default({ storage: fileStorage, fileFilter: fileFilter }).single('image'));
    }
    errorHandling() {
        this.app.use(errorMiddleware_1.default);
    }
    routes() {
        this.app.use('/api/v1/auth', authRoutes_1.default);
        this.app.use('/api/v1/users', userRoutes_1.default);
        this.app.use('/api/v1/posts', post_1.default);
        this.app.use('/api/v1/comments', comment_1.default);
    }
}
const port = process.env.PORT || 3005;
const app = new App().app;
app.listen(port, () => {
    console.log(`Server running on localhost:${port}`);
});
