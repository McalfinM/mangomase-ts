import { Response, Request, NextFunction } from 'express'
import { check, validationResult } from 'express-validator'

const validateLogin: any = [
    check('email').isString().isEmail(),
    check('password').isString().isLength({ min: 4 }),
    (res: Response, req: Request, next: NextFunction) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array()
            })
        }
        return next()
    }
]

export default validateLogin