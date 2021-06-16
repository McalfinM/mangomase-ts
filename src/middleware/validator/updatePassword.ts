import { Response, Request, NextFunction } from 'express'
import { check, validationResult } from 'express-validator'

const validatePassword: any = [
    check('password').isString(),
    check('current_password').isString(),
    check('confirm_password').isString(),
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

export default validatePassword