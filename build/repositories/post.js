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
const postQueries_1 = __importDefault(require("../entities/postQueries"));
const ClanCat_1 = __importDefault(require("../models/ClanCat"));
const Post_1 = __importDefault(require("../models/Post"));
class PostRepository {
    constructor() {
        this.create = (postEntity) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            const post = yield Post_1.default.create({
                uuid: postEntity.getUuid,
                user_uuid: postEntity.getUserUuid,
                title: postEntity.getTitle,
                content: postEntity.getContent,
                slug: postEntity.getSlug,
                age: postEntity.getAge,
                category: postEntity.getCategory,
                clan_uuid: postEntity.getClanUuid,
                animal_type: postEntity.getAnimalType,
                adoption: postEntity.getForAdoption,
                image: postEntity.getImage,
                created_at: (_a = postEntity.getCreatedAt) !== null && _a !== void 0 ? _a : new Date,
                updated_at: (_b = postEntity.getUpdatedAt) !== null && _b !== void 0 ? _b : null,
                deleted_at: (_c = postEntity.getDeletedAt) !== null && _c !== void 0 ? _c : null
            });
            postEntity.setId = post.id;
            return postEntity;
        });
        this.update = (postEntity, user) => __awaiter(this, void 0, void 0, function* () {
            var _d;
            return yield Post_1.default.updateOne({ uuid: postEntity.getUuid }, {
                user_uuid: postEntity.getUserUuid,
                title: postEntity.getTitle,
                content: postEntity.getContent,
                slug: postEntity.getSlug,
                age: postEntity.getAge,
                clan_uuid: postEntity.getClanUuid,
                animal_type: postEntity.getAnimalType,
                adoption: postEntity.getForAdoption,
                image: postEntity.getImage,
                updated_at: (_d = postEntity.getUpdatedAt) !== null && _d !== void 0 ? _d : null,
            });
        });
    }
    findByUuid(uuid) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return __awaiter(this, void 0, void 0, function* () {
            const postEntity = yield Post_1.default.findOne({ uuid: uuid });
            return postEntity ? new postQueries_1.default({
                uuid: (_a = postEntity.uuid) !== null && _a !== void 0 ? _a : '',
                user_uuid: postEntity === null || postEntity === void 0 ? void 0 : postEntity.user_uuid,
                title: (_b = postEntity.title) !== null && _b !== void 0 ? _b : '',
                content: (_c = postEntity.content) !== null && _c !== void 0 ? _c : '',
                slug: (_d = postEntity.slug) !== null && _d !== void 0 ? _d : '',
                clan_uuid: postEntity === null || postEntity === void 0 ? void 0 : postEntity.clan_uuid,
                animal_type: postEntity === null || postEntity === void 0 ? void 0 : postEntity.animal_type,
                category: (_e = postEntity.category) !== null && _e !== void 0 ? _e : '',
                comment: (_f = postEntity.comment) !== null && _f !== void 0 ? _f : [],
                age: postEntity === null || postEntity === void 0 ? void 0 : postEntity.age,
                image: postEntity === null || postEntity === void 0 ? void 0 : postEntity.image,
                adoption: (_g = postEntity.adoption) !== null && _g !== void 0 ? _g : false,
                created_at: postEntity === null || postEntity === void 0 ? void 0 : postEntity.created_at,
                updated_at: (_h = postEntity === null || postEntity === void 0 ? void 0 : postEntity.updated_at) !== null && _h !== void 0 ? _h : null,
            }) : null;
        });
    }
    findOne(uuid) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return __awaiter(this, void 0, void 0, function* () {
            const postEntity = yield Post_1.default.findOne({
                slug: uuid,
                $or: [{ deleted_at: null }, { deleted_at: undefined }],
            }).populate({ path: 'clan', select: ['uuid', 'name'], model: ClanCat_1.default });
            return postEntity ? new postQueries_1.default({
                uuid: (_a = postEntity.uuid) !== null && _a !== void 0 ? _a : '',
                user_uuid: postEntity === null || postEntity === void 0 ? void 0 : postEntity.user_uuid,
                title: (_b = postEntity.title) !== null && _b !== void 0 ? _b : '',
                content: (_c = postEntity.content) !== null && _c !== void 0 ? _c : '',
                slug: (_d = postEntity.slug) !== null && _d !== void 0 ? _d : '',
                clan_uuid: postEntity === null || postEntity === void 0 ? void 0 : postEntity.clan_uuid,
                clan: (_e = postEntity === null || postEntity === void 0 ? void 0 : postEntity.clan) !== null && _e !== void 0 ? _e : null,
                animal_type: postEntity === null || postEntity === void 0 ? void 0 : postEntity.animal_type,
                category: (_f = postEntity.category) !== null && _f !== void 0 ? _f : '',
                age: postEntity === null || postEntity === void 0 ? void 0 : postEntity.age,
                comment: (_g = postEntity.comment) !== null && _g !== void 0 ? _g : [],
                image: postEntity === null || postEntity === void 0 ? void 0 : postEntity.image,
                adoption: (_h = postEntity.adoption) !== null && _h !== void 0 ? _h : false,
                created_at: postEntity === null || postEntity === void 0 ? void 0 : postEntity.created_at,
                updated_at: (_j = postEntity === null || postEntity === void 0 ? void 0 : postEntity.updated_at) !== null && _j !== void 0 ? _j : null,
            }) : null;
        });
    }
    delete(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Post_1.default.updateOne({ uuid: uuid }, { $set: { deleted_at: new Date } });
        });
    }
    findByUserLogin(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Post_1.default.find({ user_uuid: user.uuid, deleted_at: null })
                .then(result => {
                return result.map(data => {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
                    return new post_1.default({
                        uuid: (_a = data === null || data === void 0 ? void 0 : data.uuid) !== null && _a !== void 0 ? _a : '',
                        user_uuid: (_b = data === null || data === void 0 ? void 0 : data.user_uuid) !== null && _b !== void 0 ? _b : '',
                        title: (_c = data === null || data === void 0 ? void 0 : data.title) !== null && _c !== void 0 ? _c : '',
                        content: (_d = data === null || data === void 0 ? void 0 : data.content) !== null && _d !== void 0 ? _d : '',
                        slug: (_e = data === null || data === void 0 ? void 0 : data.slug) !== null && _e !== void 0 ? _e : '',
                        age: (_f = data === null || data === void 0 ? void 0 : data.age) !== null && _f !== void 0 ? _f : 0,
                        category: (_g = data.category) !== null && _g !== void 0 ? _g : '',
                        clan_uuid: (_h = data === null || data === void 0 ? void 0 : data.clan_uuid) !== null && _h !== void 0 ? _h : '',
                        animal_type: (_j = data === null || data === void 0 ? void 0 : data.animal_type) !== null && _j !== void 0 ? _j : '',
                        adoption: (_k = data === null || data === void 0 ? void 0 : data.adoption) !== null && _k !== void 0 ? _k : false,
                        image: (_l = data === null || data === void 0 ? void 0 : data.image) !== null && _l !== void 0 ? _l : 'animal.jpg',
                        comment: (_m = data === null || data === void 0 ? void 0 : data.comment) !== null && _m !== void 0 ? _m : [],
                        created_at: (_o = data === null || data === void 0 ? void 0 : data.created_at) !== null && _o !== void 0 ? _o : new Date,
                        updated_at: (_p = data === null || data === void 0 ? void 0 : data.updated_at) !== null && _p !== void 0 ? _p : new Date,
                        deleted_at: (_q = data === null || data === void 0 ? void 0 : data.deleted_at) !== null && _q !== void 0 ? _q : null
                    });
                });
            })
                .catch(err => {
                return err;
            });
        });
    }
    index(specification) {
        return __awaiter(this, void 0, void 0, function* () {
            const total_customer = yield Post_1.default.find(Object.assign({}, specification.specifies())).countDocuments();
            return Post_1.default.find(Object.assign({}, specification.specifies()), {}, Object.assign(Object.assign({}, specification.paginate()), { sort: specification.specSort() })).populate({ path: 'clan', select: ['uuid', 'name'], model: ClanCat_1.default })
                .then((result) => {
                return {
                    total: total_customer,
                    data: result.map((data) => {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
                        return new postQueries_1.default({
                            uuid: (_a = data.uuid) !== null && _a !== void 0 ? _a : '',
                            user_uuid: (_b = data === null || data === void 0 ? void 0 : data.user_uuid) !== null && _b !== void 0 ? _b : '',
                            title: (_c = data === null || data === void 0 ? void 0 : data.title) !== null && _c !== void 0 ? _c : '',
                            content: (_d = data === null || data === void 0 ? void 0 : data.content) !== null && _d !== void 0 ? _d : '',
                            slug: (_e = data === null || data === void 0 ? void 0 : data.slug) !== null && _e !== void 0 ? _e : '',
                            age: (_f = data === null || data === void 0 ? void 0 : data.age) !== null && _f !== void 0 ? _f : 0,
                            clan_uuid: (_g = data === null || data === void 0 ? void 0 : data.clan_uuid) !== null && _g !== void 0 ? _g : '',
                            clan: (_h = data === null || data === void 0 ? void 0 : data.clan) !== null && _h !== void 0 ? _h : null,
                            animal_type: (_j = data === null || data === void 0 ? void 0 : data.animal_type) !== null && _j !== void 0 ? _j : '',
                            category: (_k = data.category) !== null && _k !== void 0 ? _k : '',
                            adoption: (_l = data === null || data === void 0 ? void 0 : data.adoption) !== null && _l !== void 0 ? _l : false,
                            image: (_m = data === null || data === void 0 ? void 0 : data.image) !== null && _m !== void 0 ? _m : 'animal.jpg',
                            comment: (_o = data === null || data === void 0 ? void 0 : data.comment) !== null && _o !== void 0 ? _o : [],
                            created_at: (_p = data === null || data === void 0 ? void 0 : data.created_at) !== null && _p !== void 0 ? _p : new Date,
                            updated_at: (_q = data === null || data === void 0 ? void 0 : data.updated_at) !== null && _q !== void 0 ? _q : new Date,
                            deleted_at: (_r = data === null || data === void 0 ? void 0 : data.deleted_at) !== null && _r !== void 0 ? _r : null
                        });
                    }),
                };
            })
                .catch((err) => {
                return err;
            });
        });
    }
}
exports.default = new PostRepository();
