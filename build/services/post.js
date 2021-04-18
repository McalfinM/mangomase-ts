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
const post_1 = __importDefault(require("../entities/post"));
const post_2 = __importDefault(require("../repositories/post"));
const uuid_1 = require("uuid");
const slugify_1 = __importDefault(require("slugify"));
const exceptions_1 = require("@tsed/exceptions");
const getPostSpecification_1 = __importDefault(require("../repositories/specifications/getPostSpecification"));
class PostService {
    index(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield post_2.default.index(new getPostSpecification_1.default(data));
        });
    }
    create(request, user, image) {
        var _a, _b, _c, _d, _e, _f, _g;
        return __awaiter(this, void 0, void 0, function* () {
            const postEntity = new post_1.default({
                uuid: uuid_1.v4(),
                user_uuid: user.uuid,
                title: (_a = request.title) !== null && _a !== void 0 ? _a : '',
                content: (_b = request.content) !== null && _b !== void 0 ? _b : '',
                slug: slugify_1.default(request.title + '-' + uuid_1.v4()),
                clan_uuid: (_c = request.clan_uuid) !== null && _c !== void 0 ? _c : '',
                category: (_d = request.category) !== null && _d !== void 0 ? _d : '',
                animal_type: (_e = request.animal_type) !== null && _e !== void 0 ? _e : '',
                user: null,
                age: (_f = request.age) !== null && _f !== void 0 ? _f : 0,
                image: image !== null && image !== void 0 ? image : 'images/posts/pet.jpg',
                adoption: (_g = request.adoption) !== null && _g !== void 0 ? _g : false,
                created_at: new Date,
                updated_at: null
            });
            const post = yield post_2.default.create(postEntity);
            return post;
        });
    }
    update(request, user, uuid) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return __awaiter(this, void 0, void 0, function* () {
            const postEntity = new post_1.default({
                uuid: uuid,
                user_uuid: '7gd74-5895-59gf-589njn54-5945j4nj',
                title: (_a = request.title) !== null && _a !== void 0 ? _a : '',
                content: (_b = request.content) !== null && _b !== void 0 ? _b : '',
                slug: slugify_1.default(request.title + '-' + uuid_1.v4()),
                clan_uuid: (_c = request.clan_uuid) !== null && _c !== void 0 ? _c : '',
                category: (_d = request.category) !== null && _d !== void 0 ? _d : '',
                animal_type: (_e = request.animal_type) !== null && _e !== void 0 ? _e : '',
                age: (_f = request.age) !== null && _f !== void 0 ? _f : 0,
                user: null,
                image: (_g = request.image) !== null && _g !== void 0 ? _g : 'pet.jpg',
                adoption: (_h = request.adoption) !== null && _h !== void 0 ? _h : false,
                updated_at: new Date
            });
            const post = yield post_2.default.update(postEntity, user);
            return postEntity;
        });
    }
    findOne(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield post_2.default.findOne(uuid);
            if (!post)
                throw new exceptions_1.BadRequest('Post Not Found find one');
            return post;
        });
    }
    findOneForEdit(uuid, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield post_2.default.findByUuid(uuid);
            console.log(post, 'ini hasil');
            if (!post)
                throw new exceptions_1.BadRequest('Post Not Found');
            if (post.getUserUuid !== user.uuid)
                throw new exceptions_1.Unauthorized('Unauthorized');
            return post;
        });
    }
    findByUuid(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield post_2.default.findByUuid(uuid);
            if (!post)
                throw new exceptions_1.BadRequest('Post Not Found');
            return post;
        });
    }
    delete(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield post_2.default.delete(uuid);
            if (!post)
                throw new exceptions_1.BadRequest('Post Not Found');
            return post;
        });
    }
    findByUserLogin(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield post_2.default.findByUserLogin(user);
            return post;
        });
    }
}
exports.default = new PostService();
