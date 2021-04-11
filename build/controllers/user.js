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
const user_1 = __importDefault(require("../services/user"));
const uuid_1 = require("uuid");
const AccessMenu_1 = __importDefault(require("../models/AccessMenu"));
class UserController {
    constructor() {
        this.find = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield user_1.default.find();
                return res.status(200).json({
                    count: data.length,
                    data: data
                });
            }
            catch (err) {
                next(err);
            }
        });
        this.findOne = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const url = req.originalUrl;
                const uuid = req.app.locals.credential.uuid;
                // const { uuid } = req.params
                const data = yield user_1.default.findOne(uuid, url);
                return res.status(200).json(data);
            }
            catch (error) {
                next(error);
            }
        });
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password } = req.body;
                const data = yield user_1.default.create(name, email, password);
                return res.status(201).json(data);
            }
            catch (error) {
                next(error);
            }
        });
        this.profile = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.app.locals.credential;
                console.log(user, 'ini user');
                const data = yield user_1.default.profile(user);
                return res.status(200).json(data);
            }
            catch (error) {
                next(error);
            }
        });
        this.update = () => __awaiter(this, void 0, void 0, function* () {
            //
        });
        this.delete = () => {
            //
        };
        // create_role = async (req: Request, res: Response, next: NextFunction)=>{
        //     const {name} = req.body
        //     const role = await Role.create(
        //         {
        //             uuid: uuid(),
        //             name: name
        //         }
        //     )
        //     return res.status(201).json(role)
        // }
        this.create_role = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { user_uuid, role_uuid, access } = req.body;
            const role = yield AccessMenu_1.default.create({
                uuid: uuid_1.v4(),
                user_uuid: user_uuid,
                role_uuid: role_uuid,
                access_BE: access
            });
            return res.status(201).json(role);
        });
    }
}
exports.default = new UserController();
