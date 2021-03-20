"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validator = [
    express_validator_1.check('name').isString(),
    express_validator_1.check('email').isString().isEmail(),
    express_validator_1.check('password').isString().isLength({ min: 4 }),
    (req, res, next) => {
        const errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array()
            });
        }
        return next();
    }
];
exports.default = validator;
