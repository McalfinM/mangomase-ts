import { Router, Request, Response } from 'express'
import { registerValidator } from '../middleware/validator/authValidator'
import validateLogin from '../middleware/validator/loginValidator'
import { auth } from '../middleware/authMiddleware'
import BaseRoutes from './baseRoutes'
import authController from '../controllers/authController'
import { validate } from '../middleware/requestValidation'

class authRoutes extends BaseRoutes {
    public routes(): void {
        this.router.post('/login', validateLogin, authController.login)
        this.router.post('/register', registerValidator(), validate, authController.register)
    }
}

export default new authRoutes().router