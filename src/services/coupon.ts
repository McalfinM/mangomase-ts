
import { v4 as uuid } from 'uuid'
import CouponEntity from '../entities/coupon'
import CouponRepository from '../repositories/coupon'
import CreateCouponRequest from '../request/createCouponRequest'
class CouponService {

    private readonly couponRepository = new CouponRepository()

    async create(data: CreateCouponRequest): Promise<{ success: true }> {
        const entity = new CouponEntity({
            uuid: uuid(),
            name: data.name,
            value: data.value,
            created_at: new Date(),
            updated_at: new Date()
        })
        await this.couponRepository.create(entity)
        return { success: true }
    }

    async findAll(): Promise<{ data: CouponEntity[] }> {
        return await this.couponRepository.findAll()
    }

    async findOne(uuid: string): Promise<CouponEntity | null> {
        return await this.couponRepository.findOne(uuid)
    }
}

export default new CouponService()
