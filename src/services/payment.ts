
import { v4 as uuid } from 'uuid'
import PaymentEntity from '../entities/payment'
import PaymentRepository from '../repositories/payment'
import CreatePaymentRequest from '../request/createPaymentRequest'
import { ErrorNotFound } from '../utils/errors'
import OrderService from './order'
import CouponService from './coupon'
import { PaymentMethod } from '../entities/enums/paymentMethod'
import e from 'express'
class PaymentService {

    private readonly paymentRepository = new PaymentRepository()

    async create(order_uuid: string, data: CreatePaymentRequest): Promise<PaymentEntity> {
        const order = await OrderService.findOne(order_uuid)
        if (!order) throw new ErrorNotFound('Order tidak ditemukan', '@Service Payment => Create')
        if (data.coupon_uuid) {
            const coupon = await CouponService.findOne(data.coupon_uuid)
            if (!coupon) throw new ErrorNotFound('Kupon tidak ada', '@Service payment => create')
            let diskon = 0
            let total = 0
            for (let i = 0; i < order.menus.length; i++) {
                total += order.menus[i].price * order.menus[i].quantity
            }
            let potongan = total * coupon.value / 100
            diskon = total - potongan
            const entity = new PaymentEntity({
                uuid: uuid(),
                discount: coupon.value,
                menus: order.menus,
                email: "",
                name: order.name,
                no_invoice: "MM" + new Date().getTime(),
                notes: "",
                payment_method: PaymentMethod.CASH,
                phone: "",
                quantity: order.quantity,
                total_after_discount: diskon,
                total_price: total,
                created_at: new Date(),
                updated_at: new Date()
            })
            return await this.paymentRepository.create(entity)
        } else {
            let total = 0

            for (let i = 0; i < order.menus.length; i++) {
                total += order.menus[i].price * order.menus[i].quantity
            }
            const entity = new PaymentEntity({
                uuid: uuid(),
                discount: 0,
                menus: order.menus,
                email: "",
                name: order.name,
                no_invoice: "MM" + new Date().getTime(),
                notes: "",
                payment_method: PaymentMethod.CASH,
                phone: "",
                quantity: order.quantity,
                total_after_discount: 0,
                total_price: total,
                created_at: new Date(),
                updated_at: new Date()
            })
            return await this.paymentRepository.create(entity)
        }


    }

    // async findAll(): Promise<{ data: PaymentEntity[] }> {
    //     return await this.paymentRepository.findAll()
    // }

    async findOne(uuid: string): Promise<PaymentEntity | null> {
        return await this.paymentRepository.findOne(uuid)
    }
}

export default new PaymentService()
