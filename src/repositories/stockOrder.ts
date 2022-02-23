

import StockOrderEntity from "../entities/stockOrder";
import StockOrderModel from "../models/stockOrder";
import specificationInterface from "./specifications/specificationInterface";

class StockOrderRepository {
    async create(data: StockOrderEntity): Promise<StockOrderEntity> {
        const result = await StockOrderModel.create(data.toJSON())

        return new StockOrderEntity(data)
    }
    async update(data: StockOrderEntity): Promise<{ success: true }> {
        const result = await StockOrderModel.updateOne({ uuid: data.uuid }, {
            ...data.toJson()
        })

        return { success: true }
    }
    async findOne(uuid: string): Promise<StockOrderEntity | null> {
        const result = await StockOrderModel.findOne({ uuid: uuid })

        return result ? new StockOrderEntity(result) : null
    }



    async delete(uuid: string): Promise<{ success: true }> {
        const result = await StockOrderModel.updateOne({ uuid: uuid }, {
            deleted_at: new Date
        })

        return { success: true }
    }

    async findAll(
        specification: specificationInterface
    ): Promise<{
        total: number;
        data: StockOrderEntity[];
    }> {
        const total_customer = await StockOrderModel.find({

            ...specification.specifies(),
        }).countDocuments();
        return StockOrderModel.find(
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
                        return new StockOrderEntity({
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

export default StockOrderRepository;
