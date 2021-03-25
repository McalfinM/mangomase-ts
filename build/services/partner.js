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
const partner_1 = __importDefault(require("../entities/partner"));
const partner_2 = __importDefault(require("../repositories/partner"));
const uuid_1 = require("uuid");
const exceptions_1 = require("@tsed/exceptions");
class PartnerService {
    constructor() {
        this.getAll = (query) => __awaiter(this, void 0, void 0, function* () {
            const post = yield partner_2.default.index(query);
            if (!post)
                throw new exceptions_1.BadRequest('Post Not Found');
            return post;
        });
    }
    create(request, user, image) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const postEntity = new partner_1.default({
                uuid: uuid_1.v4(),
                user_uuid: '7gd74-5895-59gf-589njn54-5945j4nj',
                name: request.name,
                description: request.description,
                hours_close_open: request.hours_close_open,
                image: image !== null && image !== void 0 ? image : 'partner.jpg',
                category: request.category,
                created_at: (_a = request.created_at) !== null && _a !== void 0 ? _a : new Date(),
                updated_at: (_b = request.updated_at) !== null && _b !== void 0 ? _b : null,
                deleted_at: (_c = request.deleted_at) !== null && _c !== void 0 ? _c : null,
            });
            const post = yield partner_2.default.create(postEntity);
            return post;
        });
    }
    update(request, user, uuid) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const partnerEntity = new partner_1.default({
                uuid: uuid,
                user_uuid: '7gd74-5895-59gf-589njn54-5945j4nj',
                name: request.name,
                description: request.description,
                hours_close_open: request.hours_close_open,
                image: request.image,
                category: request.category,
                updated_at: (_a = request.updated_at) !== null && _a !== void 0 ? _a : new Date(),
            });
            const post = yield partner_2.default.update(partnerEntity, uuid);
            return partnerEntity;
        });
    }
    findOne(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield partner_2.default.findOne(uuid);
            if (!post)
                throw new exceptions_1.BadRequest('Post Not Found');
            return post;
        });
    }
    delete(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield partner_2.default.delete(uuid);
            if (!post)
                throw new exceptions_1.BadRequest('Post Not Found');
            return post;
        });
    }
}
exports.default = new PartnerService();
