import { Router, Request, Response } from 'express'
import BaseRoutes from './baseRoutes'
import userController from '../controllers/user'
import { auth } from '../middleware/authMiddleware'
import updateUser from '../middleware/validator/updateUser'
import { validate } from "../middleware/requestValidation";
import validatePassword from '../middleware/validator/updatePassword'
import user from '../repositories/user'

class userRoutes extends BaseRoutes {
    public routes(): void {
        // this.router.get('/', auth, userController.find)

    }
}

export default new userRoutes().router