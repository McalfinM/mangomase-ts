"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importStar(require("body-parser"));
const compression_1 = __importDefault(require("compression"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
require("./database");
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const post_1 = __importDefault(require("./routes/post"));
const comment_1 = __importDefault(require("./routes/comment"));
const partner_1 = __importDefault(require("./routes/partner"));
const province_1 = __importDefault(require("./routes/province"));
const city_1 = __importDefault(require("./routes/city"));
const clan_1 = __importDefault(require("./routes/clan"));
const errorMiddleware_1 = __importDefault(require("./middleware/errorMiddleware"));
// import { v4 as uuidv4 } from 'uuid'
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
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
        this.app.use(body_parser_1.urlencoded({ extended: false }));
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
        this.app.use('/api/v1/cities', city_1.default);
        this.app.use('/api/v1/clans', clan_1.default);
    }
}
const port = process.env.PORT || 3008;
const app = new App().app;
app.listen(port, () => {
    console.log(`Server running on localhost:${port}`);
});
