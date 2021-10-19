import BaseRoutes from './baseRoutes'

import { auth } from '../middleware/authMiddleware'
import OrderController from '../controllers/order'
import { createCartValidator } from '../middleware/validator/postCreate'
import { validate } from '../middleware/requestValidation'
import { updateCartValidator } from '../middleware/validator/updateOrder'


class MenuRoutes extends BaseRoutes {
    public routes(): void {
        this.router.get('/', auth, OrderController.findAll)
        this.router.post('/', createCartValidator(), validate, auth, OrderController.create)
        this.router.get('/:uuid', auth, OrderController.findOne)
        this.router.patch('/:uuid', updateCartValidator(), validate, auth, OrderController.createOrUpdate)
        this.router.patch('/:uuid', auth, OrderController.delete)
        this.router.patch('/minus-menu/:uuid', auth, OrderController.minusQuantity)
    }
}

export default new MenuRoutes().router