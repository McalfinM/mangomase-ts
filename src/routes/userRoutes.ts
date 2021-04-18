import { Router, Request, Response } from 'express'
import BaseRoutes from './baseRoutes'
import userController from '../controllers/user'
import { auth } from '../middleware/authMiddleware'
import updateUser from '../middleware/validator/updateUser'
import { validate } from "../middleware/requestValidation";

class userRoutes extends BaseRoutes {
    public routes(): void {
        // this.router.get('/', auth, userController.find)
        this.router.get('/', auth, userController.findOne)
        // this.router.post('/', userController.create)

        this.router.put('/profile', auth, updateUser, userController.update)
        // this.router.delete('/:uuid', userController.delete)
        this.router.post('/role', userController.create_role)
        this.router.get('/profile', auth, userController.profile)
    }
}

export default new userRoutes().router