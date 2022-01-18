import { body, ValidationChain } from "express-validator"

export const createCartValidator = (): ValidationChain[] => {
    return [

        body('customer_name', 'Masukan nama kamu').exists().notEmpty().default('client' + new Date()),
    ]
}
