import { body, ValidationChain } from "express-validator"

export const updateCartValidator = (): ValidationChain[] => {
    return [

        body('customer_name', 'Masukan Nama').exists(),
        body('carts', 'carts must be an array').isArray(),
        body('carts.*.menu_uuid', 'Menu harus di isi').exists(),
        body('carts.*.menu_uuid', 'Menu harus di isi').isString(),
        body('carts.*.quantity', 'Jumlah yang di beli harus di isi').exists(),
        body('carts.*.quantity', 'Jumlah yang di beli harus di isi').isNumeric()
    ]
}
