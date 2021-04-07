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
const province_1 = __importDefault(require("../entities/province"));
const Province_1 = __importDefault(require("../models/Province"));
class ProvinceRepository {
    create(provinceEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield Province_1.default.create({
                uuid: provinceEntity.getUuid,
                code: provinceEntity.getCode,
                name: provinceEntity.getName
            });
            return provinceEntity;
        });
    }
    findOne(uuid) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const partner = yield Province_1.default.findOne({
                uuid: uuid,
            });
            return partner ? new province_1.default({
                uuid: (_a = partner.uuid) !== null && _a !== void 0 ? _a : '',
                code: (_b = partner.code) !== null && _b !== void 0 ? _b : '',
                name: (_c = partner.name) !== null && _c !== void 0 ? _c : ''
            }) : null;
        });
    }
    update(provinceEntity, uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const partner = yield Province_1.default.updateOne({ uuid: uuid, }, {
                code: provinceEntity.getCode,
                name: provinceEntity.getName
            });
            return partner;
        });
    }
    delete(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const partner = yield Province_1.default.updateOne({ uuid: uuid }, {
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
            return Province_1.default.find(Object.assign({}, queryVal), {}, options)
                .then(result => {
                return result.map(data => {
                    var _a, _b, _c;
                    return new province_1.default({
                        uuid: (_a = data.uuid) !== null && _a !== void 0 ? _a : '',
                        code: (_b = data.code) !== null && _b !== void 0 ? _b : '',
                        name: (_c = data.name) !== null && _c !== void 0 ? _c : ''
                    });
                });
            })
                .catch(err => {
                return err;
            });
        });
    }
}
exports.default = new ProvinceRepository();
