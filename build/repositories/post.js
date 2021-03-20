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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = __importDefault(require("../entities/post"));
const Post_1 = __importDefault(require("../models/Post"));
class PostRepository {
    constructor() {
        this.create = (postEntity) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const post = yield Post_1.default.create({
                uuid: postEntity.getUuid,
                user_uuid: postEntity.getUserUuid,
                title: postEntity.getTitle,
                content: postEntity.getContent,
                slug: postEntity.getSlug,
                age: postEntity.getAge,
                clan: postEntity.getClan,
                animal_type: postEntity.getAnimalType,
                for_adoption: postEntity.getForAdoption,
                want_adoption: postEntity.getWantdoption,
                image: postEntity.getImage,
                created_at: (_a = postEntity.getCreatedAt) !== null && _a !== void 0 ? _a : new Date,
                updated_at: (_b = postEntity.getUpdatedAt) !== null && _b !== void 0 ? _b : null,
            });
            postEntity.setId = post.id;
            return postEntity;
        });
        this.update = (postEntity, user) => __awaiter(this, void 0, void 0, function* () {
            var _c;
            console.log(postEntity.getUuid, 'ini adalah post');
            return yield Post_1.default.updateOne({ uuid: postEntity.getUuid }, {
                user_uuid: postEntity.getUserUuid,
                title: postEntity.getTitle,
                content: postEntity.getContent,
                slug: postEntity.getSlug,
                age: postEntity.getAge,
                clan: postEntity.getClan,
                animal_type: postEntity.getAnimalType,
                for_adoption: postEntity.getForAdoption,
                want_adoption: postEntity.getWantdoption,
                image: postEntity.getImage,
                updated_at: (_c = postEntity.getUpdatedAt) !== null && _c !== void 0 ? _c : null,
            });
        });
    }
    findOne(uuid) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const postEntity = yield Post_1.default.findOne({
                uuid: uuid,
                $or: [{ deleted_at: null }, { deleted_at: undefined }],
            });
            return postEntity ? new post_1.default({
                uuid: postEntity === null || postEntity === void 0 ? void 0 : postEntity.uuid,
                user_uuid: postEntity === null || postEntity === void 0 ? void 0 : postEntity.user_uuid,
                title: postEntity === null || postEntity === void 0 ? void 0 : postEntity.title,
                content: postEntity === null || postEntity === void 0 ? void 0 : postEntity.content,
                slug: postEntity === null || postEntity === void 0 ? void 0 : postEntity.slug,
                clan: postEntity === null || postEntity === void 0 ? void 0 : postEntity.clan,
                animal_type: postEntity === null || postEntity === void 0 ? void 0 : postEntity.animal_type,
                age: postEntity === null || postEntity === void 0 ? void 0 : postEntity.age,
                image: postEntity === null || postEntity === void 0 ? void 0 : postEntity.image,
                for_adoption: postEntity === null || postEntity === void 0 ? void 0 : postEntity.for_adoption,
                want_adoption: postEntity === null || postEntity === void 0 ? void 0 : postEntity.want_adoption,
                created_at: postEntity === null || postEntity === void 0 ? void 0 : postEntity.created_at,
                updated_at: (_a = postEntity === null || postEntity === void 0 ? void 0 : postEntity.updated_at) !== null && _a !== void 0 ? _a : null,
            }) : null;
        });
    }
    delete(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Post_1.default.updateOne({ uuid: uuid }, { $set: { deleted_at: new Date } });
        });
    }
    index(query) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { page, limit, sort } = query, rest = __rest(query, ["page", "limit", "sort"]);
            // filter
            const queryVal = {};
            for (const key in rest) {
                if (Object.prototype.hasOwnProperty.call(rest, key)) {
                    const element = rest[key];
                    if (typeof element === 'object') {
                        for (const k in element) {
                            if (Object.prototype.hasOwnProperty.call(element, k)) {
                                queryVal[key] = { ['$' + k]: element[k] };
                            }
                        }
                    }
                    else {
                        queryVal[key] = new RegExp(rest[key], 'i');
                    }
                }
            }
            // sort
            const sortVal = {};
            const sortArr = (_a = sort) === null || _a === void 0 ? void 0 : _a.split(',');
            sortArr === null || sortArr === void 0 ? void 0 : sortArr.map(s => {
                var _a;
                const splitted = (_a = s) === null || _a === void 0 ? void 0 : _a.split('.');
                sortVal[splitted[0]] = splitted[1].toUpperCase() == 'ASC' ? 1 : -1;
            });
            let options = {};
            // paginate
            if (limit) {
                // @ts-ignore
                options.limit = +limit;
            }
            if (page && limit) {
                if (+page > 1) {
                    // @ts-ignore
                    options.skip = (page - 1) * +limit;
                }
            }
            // @ts-ignore
            options.sort = sortVal;
            return Post_1.default.find(Object.assign({}, queryVal), {}, options)
                .then(result => {
                return result.map(data => {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
                    return new post_1.default({
                        id: data === null || data === void 0 ? void 0 : data._id,
                        uuid: (_a = data === null || data === void 0 ? void 0 : data.uuid) !== null && _a !== void 0 ? _a : '',
                        user_uuid: (_b = data === null || data === void 0 ? void 0 : data.user_uuid) !== null && _b !== void 0 ? _b : '',
                        title: (_c = data === null || data === void 0 ? void 0 : data.title) !== null && _c !== void 0 ? _c : '',
                        content: (_d = data === null || data === void 0 ? void 0 : data.content) !== null && _d !== void 0 ? _d : '',
                        slug: (_e = data === null || data === void 0 ? void 0 : data.slug) !== null && _e !== void 0 ? _e : '',
                        age: (_f = data === null || data === void 0 ? void 0 : data.age) !== null && _f !== void 0 ? _f : 0,
                        clan: (_g = data === null || data === void 0 ? void 0 : data.clan) !== null && _g !== void 0 ? _g : '',
                        animal_type: (_h = data === null || data === void 0 ? void 0 : data.animal_type) !== null && _h !== void 0 ? _h : '',
                        for_adoption: (_j = data === null || data === void 0 ? void 0 : data.for_adoption) !== null && _j !== void 0 ? _j : false,
                        want_adoption: (_k = data === null || data === void 0 ? void 0 : data.want_adoption) !== null && _k !== void 0 ? _k : false,
                        image: (_l = data === null || data === void 0 ? void 0 : data.image) !== null && _l !== void 0 ? _l : 'animal.jpg',
                        created_at: (_m = data === null || data === void 0 ? void 0 : data.created_at) !== null && _m !== void 0 ? _m : new Date,
                        updated_at: (_o = data === null || data === void 0 ? void 0 : data.updated_at) !== null && _o !== void 0 ? _o : new Date,
                    });
                });
            })
                .catch(err => {
                return err;
            });
        });
    }
}
exports.default = new PostRepository();
