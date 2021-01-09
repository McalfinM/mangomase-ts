import { Router, Request, Response } from 'express'
import validator from '../middleware/validator/authValidator'
import validateLogin from '../middleware/validator/loginValidator'
import { auth } from '../middleware/authMiddleware'
import BaseRoutes from './baseRoutes'
import authController from '../controllers/authController'

class authRoutes extends BaseRoutes {
    public routes(): void {
        this.router.post('/login', validateLogin, authController.login)
        this.router.post('/register', validator, authController.register)
    }
}

export default new authRoutes().router