import { Router, Request, Response } from 'express'
import BaseRoutes from './baseRoutes'
import postController from '../controllers/post'
import { auth } from '../middleware/authMiddleware'

class postRoutes extends BaseRoutes {
    public routes(): void {
        // this.router.get('/',postController)
        this.router.post('/', postController.create)
        this.router.patch('/:uuid', postController.update)
        this.router.get('/:uuid', postController.findOne)
    }
}

export default new postRoutes().router