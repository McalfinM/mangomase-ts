import { Response, Request, NextFunction } from 'express'
import { check, validationResult } from 'express-validator'

const validateUpdateUser: any = [
    check('name').isString().isString(),
    check('province_uuid').isString().isUUID(),
    check('city_uuid').isString().isUUID(),
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

export default validateUpdateUser