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
const createCommentPostRequest_1 = __importDefault(require("../request/createCommentPostRequest"));
const comment_1 = __importDefault(require("../services/comment"));
class CommentController {
    constructor() {
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.app.locals.credentials;
                const data = yield comment_1.default.create(new createCommentPostRequest_1.default(req.body), user);
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
                const data = yield comment_1.default.update(new createCommentPostRequest_1.default(req.body), uuid, user);
                return res.status(200).json({ success: true });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = new CommentController();
