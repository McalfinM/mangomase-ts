import { Router, Request, Response } from 'express'
import BaseRoutes from './baseRoutes'
import menuController from '../controllers/menu'
import { auth } from '../middleware/authMiddleware'
import multer from '../utils/multer'

class MenuRoutes extends BaseRoutes {
    public routes(): void {
        this.router.post('/', auth, multer.single('image'), menuController.create)
        this.router.patch('/:uuid', auth, multer.single('image'), menuController.update)
        this.router.get('/', auth, menuController.findAll)
        this.router.get('/:uuid', auth, menuController.findOne)

    }
}

export default new MenuRoutes().router