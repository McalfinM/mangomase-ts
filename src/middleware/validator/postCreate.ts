import { body, ValidationChain } from "express-validator"

export const createCartValidator = (): ValidationChain[] => {
    return [

        body('customer_name', 'Masukan nama kamu').exists().notEmpty().default('client' + new Date()),
        body('carts', 'Carts harus berbentuk array').isArray(),
        body('carts.*.menu_uuid', 'Menu tidak boleh kosong').isUUID(),
        body('carts.*.quantity', 'Quantity tidak boleh kosong').isNumeric(),
    ]
}
