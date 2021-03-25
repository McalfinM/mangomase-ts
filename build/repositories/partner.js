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
const partner_1 = __importDefault(require("../entities/partner"));
const Partner_1 = __importDefault(require("../models/Partner"));
class PartnerRepository {
    create(partnerEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(partnerEntity, 'ini console request');
            const post = yield Partner_1.default.create({
                uuid: partnerEntity.getUuid,
                user_uuid: partnerEntity.getUserUuid,
                name: partnerEntity.getName,
                desription: partnerEntity.getDesription,
                hours_close_open: partnerEntity.getHoursCloseOpen,
                image: partnerEntity.getImage,
                category: partnerEntity.getCategory,
                deleted_at: partnerEntity.getDeletedAt,
                created_at: partnerEntity.getCreatedAt,
                updated_at: partnerEntity.getUpdatedAt,
            });
            return partnerEntity;
        });
    }
    findOne(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const partner = yield Partner_1.default.findOne({
                uuid: uuid,
                $or: [{ deleted_at: null }, { deleted_at: undefined }],
            });
            return partner ? new partner_1.default({
                uuid: partner === null || partner === void 0 ? void 0 : partner.uuid,
                user_uuid: partner === null || partner === void 0 ? void 0 : partner.user_uuid,
                name: partner === null || partner === void 0 ? void 0 : partner.name,
                desription: partner === null || partner === void 0 ? void 0 : partner.desription,
                hours_close_open: partner === null || partner === void 0 ? void 0 : partner.hours_close_open,
                image: partner === null || partner === void 0 ? void 0 : partner.image,
                category: partner === null || partner === void 0 ? void 0 : partner.category,
                created_at: partner === null || partner === void 0 ? void 0 : partner.created_at,
                updated_at: partner === null || partner === void 0 ? void 0 : partner.updated_at,
                deleted_at: partner === null || partner === void 0 ? void 0 : partner.deleted_at,
            }) : null;
        });
    }
    update(partnerEntity, uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const partner = yield Partner_1.default.updateOne({ uuid: uuid, }, {
                uuid: partnerEntity.getUuid,
                user_uuid: partnerEntity.getUserUuid,
                name: partnerEntity.getName,
                desription: partnerEntity.getDesription,
                hours_close_open: partnerEntity.getHoursCloseOpen,
                image: partnerEntity.getImage,
                category: partnerEntity.getCategory,
                updated_at: partnerEntity.getUpdatedAt,
            });
            return partner;
        });
    }
    delete(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const partner = yield Partner_1.default.updateOne({ uuid: uuid }, {
                deleted_at: new Date()
            });
            return partner;
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
            return Partner_1.default.find(Object.assign({}, queryVal), { $or: [{ deleted_at: null }, { deleted_at: undefined }] }, options)
                .then(result => {
                return result.map(data => {
                    return new partner_1.default({
                        id: data === null || data === void 0 ? void 0 : data._id,
                        user_uuid: data === null || data === void 0 ? void 0 : data.user_uuid,
                        name: data === null || data === void 0 ? void 0 : data.name,
                        desription: data === null || data === void 0 ? void 0 : data.desription,
                        hours_close_open: data === null || data === void 0 ? void 0 : data.hours_close_open,
                        image: data === null || data === void 0 ? void 0 : data.image,
                        category: data === null || data === void 0 ? void 0 : data.category,
                        created_at: data === null || data === void 0 ? void 0 : data.created_at,
                        updated_at: data === null || data === void 0 ? void 0 : data.updated_at,
                        deleted_at: data === null || data === void 0 ? void 0 : data.deleted_at,
                    });
                });
            })
                .catch(err => {
                return err;
            });
        });
    }
}
exports.default = new PartnerRepository();
