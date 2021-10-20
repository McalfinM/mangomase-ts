

import PaymentEntity from "../entities/payment";
import PaymentModel from "../models/payment";
import specificationInterface from "./specifications/specificationInterface";

class PaymentRepository {
    async create(data: PaymentEntity): Promise<PaymentEntity> {
        const result = await PaymentModel.create({
            uuid: data.uuid,
            no_invoice: data.no_invoice,
            phone: data.phone,
            email: data.email,
            name: data.name,
            notes: data.notes,
            payment_method: data.payment_method,
            quantity: data.quantity,
            menus: data.menus,
            total_price: data.total_price,
            discount: data.discount,
            total_after_discount: data.total_after_discount,
            created_at: data.created_at,
            updated_at: data.updated_at
        })

        return new PaymentEntity(result)
    }
    async update(data: PaymentEntity): Promise<{ success: true }> {
        const result = await PaymentModel.updateOne({ uuid: data.uuid }, {
            ...data.toJson()
        })

        return { success: true }
    }
    async findOne(uuid: string): Promise<PaymentEntity | null> {
        const result = await PaymentModel.findOne({ uuid: uuid })

        return result ? new PaymentEntity(result) : null
    }
    async delete(uuid: string): Promise<{ success: true }> {
        const result = await PaymentModel.updateOne({ uuid: uuid }, {
            deleted_at: new Date
        })

        return { success: true }
    }

    async findAll(
        specification: specificationInterface
    ): Promise<{
        total: number;
        data: PaymentEntity[];
    }> {
        const total_customer = await PaymentModel.find({

            ...specification.specifies(),
        }).countDocuments();
        return PaymentModel.find(
            {
                ...specification.specifies(),
            },
            {},
            {
                ...specification.paginate(),
                sort: specification.specSort(),
            }
        )
            .then((result) => {
                return {
                    total: total_customer,
                    data: result.map((data) => {
                        return new PaymentEntity({
                            ...data.toJSON()
                        });
                    }),
                };
            })
            .catch((err) => {
                return err;
            });
    }


}

export default PaymentRepository;
