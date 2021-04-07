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
const comment_1 = __importDefault(require("../repositories/comment"));
const uuid_1 = require("uuid");
const post_1 = __importDefault(require("../entities/post"));
const post_2 = __importDefault(require("../services/post"));
class CommentService {
    create(request, user) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const searchPost = yield post_2.default.findByUuid((_a = request.post_uuid) !== null && _a !== void 0 ? _a : '');
            console.log(searchPost, 'ini search');
            const comments = yield comment_1.default.create(new post_1.default({
                uuid: searchPost.getUuid,
                comment: [{
                        uuid: uuid_1.v4(),
                        user_uuid: request.user_uuid,
                        comment: request.comment,
                        created_at: new Date,
                        deleted_at: null
                    }]
            }));
            return comments;
        });
    }
    update(request, uuid, user) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const comments = yield comment_1.default.update(new post_1.default({
                uuid: request.post_uuid,
                comment: [{
                        user_uuid: request.user_uuid,
                        comment: request.comment,
                        updated_at: new Date()
                    }]
            }), uuid, (_a = request.comment) !== null && _a !== void 0 ? _a : '');
            return comments;
        });
    }
}
exports.default = new CommentService();
