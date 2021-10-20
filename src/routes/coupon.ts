import BaseRoutes from './baseRoutes'

import { auth } from '../middleware/authMiddleware'
import CouponController from '../controllers/coupon'
import { createCouponValidator } from '../middleware/validator/couponValidator'
import { validate } from '../middleware/requestValidation'

class CouponRoutes extends BaseRoutes {
    public routes(): void {
        this.router.post('/', createCouponValidator(), validate, auth, CouponController.create)
        this.router.get('/', auth, CouponController.findAll)
        this.router.get('/:uuid', auth, CouponController.findOne)
    }
}

export default new CouponRoutes().router