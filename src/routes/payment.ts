import BaseRoutes from './baseRoutes'

import { auth } from '../middleware/authMiddleware'
import PaymentController from '../controllers/payment'
import { createCouponValidator } from '../middleware/validator/couponValidator'
import { validate } from '../middleware/requestValidation'

class PaymentRoutes extends BaseRoutes {
    public routes(): void {
        this.router.get('/', auth, PaymentController.findAll)
        this.router.post('/:order_uuid', auth, PaymentController.create)
        this.router.get('/:uuid', auth, PaymentController.findOne)
    }
}

export default new PaymentRoutes().router