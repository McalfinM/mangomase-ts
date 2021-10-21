import BaseRoutes from './baseRoutes'

import { auth } from '../middleware/authMiddleware'
import CategoryController from '../controllers/category'

class MenuRoutes extends BaseRoutes {
    public routes(): void {
        this.router.post('/', auth, CategoryController.create)
        this.router.get('/', auth, CategoryController.findAll)
    }
}

export default new MenuRoutes().router