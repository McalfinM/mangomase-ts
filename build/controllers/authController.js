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
const Authentication_1 = __importDefault(require("../utils/Authentication"));
const User_1 = __importDefault(require("../models/User"));
const authService_1 = __importDefault(require("../services/authService"));
class authController {
    constructor() {
        this.register = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password } = req.body;
                const data = yield authService_1.default.register(name, email, password);
                return res.status(201).json(data);
            }
            catch (error) {
                next(error);
            }
        });
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const data = yield User_1.default.findOne({ email: email }).select('-_id -__v');
            if (!data) {
                return res.status(404).json({
                    success: false,
                    message: 'Email not found'
                });
            }
            const compare = yield Authentication_1.default.passwordCompare(password, data.password);
            if (compare) {
                const token = yield Authentication_1.default.generateToken(data.name, email, data.uuid);
                data.password = undefined;
                // data._id = undefined;
                return res.status(200).json({
                    token_type: 'Bearer',
                    access_token: token,
                    user: data
                });
            }
            return res.status(403).json('Invalid email or password');
        });
        this.profile = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const profile = req.app.locals.credential;
            return res.status(200).json(profile);
        });
    }
}
exports.default = new authController();
