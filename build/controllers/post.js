"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createPostRequest_1 = __importDefault(require("../request/createPostRequest"));
const updatePostRequest_1 = __importDefault(require("../request/updatePostRequest"));
const post_1 = __importDefault(require("../services/post"));
class PostController {
    constructor() {
        this.getAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.app.locals.credentials;
                const query = req.query;
                const data = yield post_1.default.getAll(query);
                return res.status(200).json(data);
            }
            catch (error) {
                next(error);
            }
        });
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.app.locals.credentials;
                console.log(req, 'ini file');
                const image = req.file.path;
                const data = yield post_1.default.create(new createPostRequest_1.default(req.body), user, image);
                return res.status(201).json({ success: true });
            }
            catch (error) {
                next(error);
            }
        });
        this.update = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.app.locals.credentials;
                const { params: { uuid } } = req;
                const data = yield post_1.default.update(new updatePostRequest_1.default(req.body), user, uuid);
                return res.status(200).json({ success: true });
            }
            catch (error) {
                next(error);
            }
        });
        this.findOne = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { params: { uuid } } = req;
                const data = yield post_1.default.findOne(uuid);
                return res.status(200).json(data);
            }
            catch (error) {
                next(error);
            }
        });
        this.delete = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { params: { uuid } } = req;
                const data = yield post_1.default.delete(uuid);
                if (!data)
                    throw new Error('not found');
                return res.status(200).json({ success: true });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = new PostController();
