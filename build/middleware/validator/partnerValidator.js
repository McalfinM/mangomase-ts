"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validator = [
    express_validator_1.check('user_uuid').isString(),
    express_validator_1.check('name').isString(),
    express_validator_1.check('description').isString(),
    express_validator_1.check('hours_close_open').isString(),
    express_validator_1.check('category').isString(),
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
