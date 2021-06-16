import { Request, Response, NextFunction } from 'express'
import { check, validationResult } from 'express-validator'

const validator = [
    check('title', 'title cant be empty').notEmpty(),
    check('title', 'title must be string').isString(),
    check('content', 'content cant be empty').notEmpty(),
    check('age', 'age must be contains number').isNumeric(),
    check('age', 'age cant be empty').notEmpty(),
    check('animal_type', 'animal type cant be empty').notEmpty(),
    check('animal_type', 'animal type must uuid').isUUID(),
    check('adoption', 'adoption cant be empty').notEmpty(),
    check('adoption', 'adoption must string').isString(),
    check('clan_uuid', 'clan cant be empty').notEmpty(),
    check('clan_uuid', 'clan must be uuid').isUUID(),
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