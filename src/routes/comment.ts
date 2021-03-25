import { Router, Request, Response } from 'express'
import BaseRoutes from './baseRoutes'
import commentController from '../controllers/comment'
import { auth } from '../middleware/authMiddleware'

class CommentRoutes extends BaseRoutes {
    public routes(): void {
        // this.router.get('/', commentController.getAll)
        this.router.post('/', commentController.create)
        this.router.put('/:uuid', commentController.update)
        // this.router.get('/:uuid', commentController.findOne)
    }
}

export default new CommentRoutes().router