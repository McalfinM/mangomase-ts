import { body, ValidationChain } from "express-validator"

export const updateCartValidator = (): ValidationChain[] => {
    return [

        body('menu_uuid', 'Masukan menu kamu').exists(),
    ]
}
