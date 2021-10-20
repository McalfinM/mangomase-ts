import BaseRoutes from './baseRoutes'

import { auth } from '../middleware/authMiddleware'
import PaymentController from '../controllers/payment'
import { createCouponValidator } from '../middleware/validator/couponValidator'
import { validate } from '../middleware/requestValidation'

class PaymentRoutes extends BaseRoutes {
    public routes(): void {
        this.router.post('/:order_uuid', auth, PaymentController.create)
    }
}

export default new PaymentRoutes().router