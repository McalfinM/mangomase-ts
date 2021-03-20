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
const errorMiddleware_1 = __importDefault(require("./middleware/errorMiddleware"));
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
    }
    errorHandling() {
        this.app.use(errorMiddleware_1.default);
    }
    routes() {
        this.app.use('/api/v1/auth', authRoutes_1.default);
        this.app.use('/api/v1/users', userRoutes_1.default);
        this.app.use('/api/v1/post', post_1.default);
    }
}
const port = process.env.PORT || 3005;
const app = new App().app;
app.listen(port, () => {
    console.log(`Server running on localhost:${port}`);
});
