import { body, ValidationChain } from "express-validator"

export const registerValidator = (): ValidationChain[] => {
    return [
        body('username', 'Masukan username anda').exists(),
        body('name', 'Masukan nama kamu').exists(),
        body('email', 'Masukan email kamu').exists().isEmail(),
        body('password', 'Masukan password kamu').exists().isLength({ min: 6 })
    ]
}
