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
const partner_1 = __importDefault(require("./routes/partner"));
const province_1 = __importDefault(require("./routes/province"));
const errorMiddleware_1 = __importDefault(require("./middleware/errorMiddleware"));
// import { v4 as uuidv4 } from 'uuid'
const path_1 = __importDefault(require("path"));
// const fileStorage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'images')
//     },
//     filename: (req, file, cb) => {
//         cb(null, new Date().getTime() + '-' + uuidv4() + '.jpg')
//     }
// })
// const fileFilter = (req: any, file: any, cb: any) => {
//     if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
//         cb(null, true)
//     } else {
//         cb(new BadRequest('Only .jpeg or .png files are accepted'), false);
//     }
// }
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
        // this.app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'))
        this.app.use(express_1.default.static(path_1.default.join(__dirname, '../')));
        console.log(__dirname);
    }
    errorHandling() {
        this.app.use(errorMiddleware_1.default);
    }
    routes() {
        this.app.use('/api/v1/auth', authRoutes_1.default);
        this.app.use('/api/v1/users', userRoutes_1.default);
        this.app.use('/api/v1/posts', post_1.default);
        this.app.use('/api/v1/comments', comment_1.default);
        this.app.use('/api/v1/partners', partner_1.default);
        this.app.use('/api/v1/provinces', province_1.default);
    }
}
const port = process.env.PORT || 3005;
const app = new App().app;
app.listen(3005, () => {
    console.log(`Server running on localhost:${port}`);
});
