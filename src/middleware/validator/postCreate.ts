import { body, ValidationChain } from "express-validator"

export const createCartValidator = (): ValidationChain[] => {
    return [

        body('name', 'Masukan nama kamu').exists(),
    ]
}
