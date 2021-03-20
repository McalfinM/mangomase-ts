"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validateLogin = [
    express_validator_1.check('email').isString().isEmail(),
    express_validator_1.check('password').isString().isLength({ min: 4 }),
    (res, req, next) => {
        const errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array()
            });
        }
        return next();
    }
];
exports.default = validateLogin;
