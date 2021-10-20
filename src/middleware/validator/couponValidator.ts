import { body, ValidationChain } from "express-validator"

export const createCouponValidator = (): ValidationChain[] => {
    return [

        body('name', 'Masukan nama kupon').exists().isString(),
        body('value', 'Masukan nilai').exists().isNumeric(),
    ]
}
