"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class RouteMiddlewarre {
    static extractJwt(req, res, next) {
        if (!req.headers.authorization) {
            return res.status(401).json('Unauthorized');
        }
        const secretKey = process.env.JWT_SECRET || 'secret';
        const token = req.headers.authorization.split(' ')[1];
        try {
            const credential = jsonwebtoken_1.default.verify(token, secretKey);
            if (credential) {
                req.app.locals.credential = credential;
                return next();
            }
            return res.status(400).json('Token invalid');
        }
        catch (error) {
            return res.send(error);
        }
    }
}
exports.default = RouteMiddlewarre;
