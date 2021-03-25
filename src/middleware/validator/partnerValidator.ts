import { Request, Response, NextFunction } from 'express'
import { check, validationResult } from 'express-validator'

const validator = [
    check('user_uuid').isString(),
    check('name').isString(),
    check('description').isString(),
    check('hours_close_open').isString(),
    check('category').isString(),
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