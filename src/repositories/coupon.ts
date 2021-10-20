
import CouponEntity from "../entities/coupon";
import CouponModel from "../models/coupon";
import specificationInterface from "./specifications/specificationInterface";

class CouponRepository {
    async create(data: CouponEntity): Promise<CouponEntity> {
        const result = await CouponModel.create(data.toJSON())

        return new CouponEntity(result)
    }
    async update(data: CouponEntity): Promise<{ success: true }> {
        const result = await CouponModel.updateOne({ uuid: data.uuid }, {
            ...data.toJson()
        })

        return { success: true }
    }
    async findOne(uuid: string): Promise<CouponEntity | null> {
        const result = await CouponModel.findOne({ uuid: uuid })

        return result ? new CouponEntity(result) : null
    }


    async delete(uuid: string, user_uuid: string): Promise<{ success: true }> {
        const result = await CouponModel.updateOne({ uuid: uuid, "created.by": user_uuid }, {
            deleted_at: new Date
        })

        return { success: true }
    }


    async findAll(): Promise<{ data: CouponEntity[] }> {
        return CouponModel.find()
            .then(result => {
                return {
                    data: result.map(data => {
                        return new CouponEntity({
                            uuid: data.uuid,
                            name: data.name,
                            value: data.value,
                            created_at: data.created_at,
                            updated_at: data.updated_at
                        })
                    })
                }
            })
    }



}

export default CouponRepository;
