import { Request, Response, NextFunction } from 'express'
import { check, validationResult } from 'express-validator'

const validator = [
    check('name').isString(),
    check('email').isString().isEmail(),
    check('password').isString().isLength({ min: 4 }),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array()
            })
        }
        return next()
    }
]

export default validator;