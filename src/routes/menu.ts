import { Router, Request, Response } from 'express'
import BaseRoutes from './baseRoutes'
import menuController from '../controllers/menu'
import { auth } from '../middleware/authMiddleware'
import multer from '../utils/multer'

class MenuRoutes extends BaseRoutes {
    public routes(): void {
        this.router.post('/', auth, multer.single('image'), menuController.create)

    }
}

export default new MenuRoutes().router