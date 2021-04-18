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
const createPostRequest_1 = __importDefault(require("../request/createPostRequest"));
const getPostRequest_1 = __importDefault(require("../request/getPostRequest"));
const updatePostRequest_1 = __importDefault(require("../request/updatePostRequest"));
const post_1 = __importDefault(require("../services/post"));
class PostController {
    constructor() {
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.app.locals.credential;
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
        this.findOneForEdit = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { params: { uuid } } = req;
                const user = req.app.locals.credential;
                const data = yield post_1.default.findOneForEdit(uuid, user);
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
        this.findByUserLogin = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.app.locals.credential;
                const data = yield post_1.default.findByUserLogin(user);
                return res.status(200).json(data);
            }
            catch (error) {
                next(error);
            }
        });
    }
    findAll(req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const { query } = req;
            const _c = req.query, { page, limit, sort } = _c, rest = __rest(_c, ["page", "limit", "sort"]);
            const pageVal = (_a = page === null || page === void 0 ? void 0 : page.toString()) !== null && _a !== void 0 ? _a : "1";
            const limitVal = (_b = limit === null || limit === void 0 ? void 0 : limit.toString()) !== null && _b !== void 0 ? _b : "30";
            let obj = {
                totalPage: 0,
                totalData: 0,
                currentPage: '',
                limit: '',
                data: [{}]
            };
            yield post_1.default.index(new getPostRequest_1.default(query))
                .then((result) => {
                obj.totalPage = Math.ceil(result.total / +limitVal);
                obj.totalData = result.total || 0;
                obj.currentPage = pageVal;
                obj.limit = limitVal;
                // res.setHeader("X-Pagination-Total-Page", Math.ceil(result.total / +limitVal));
                // res.setHeader("X-Pagination-Total-Data", result.total || 0);
                // res.setHeader("X-Pagination-Current-Page", pageVal);
                // res.setHeader("X-Pagination-Limit", limitVal);
                obj.data = result.data.map((data) => data.toListData());
            });
            return res.status(200).json(obj);
        });
    }
}
exports.default = new PostController();
