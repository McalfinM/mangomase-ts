
import OrderEntity from "../entities/order";
import OrderModel from "../models/order";
import specificationInterface from "./specifications/specificationInterface";


class OrderRepository {


    async create(data: OrderEntity): Promise<{ success: true }> {

        await OrderModel.create(data.toJSON())

        return { success: true }
    }

    async findOne(uuid: string): Promise<OrderEntity | null> {
        const result = await OrderModel.findOne({ uuid: uuid })

        return result ? new OrderEntity(result) : null
    }

    // async findOneMyProduct(user_uuid:string,product_uuid: string): Promise<OrderEntity | null> {
    //     const result = await OrderModel.findOne({ "created_by.uuid": user_uuid,  })

    //     return result ? new OrderEntity(result) : null
    // }

    async findOneMyCart(uuid: string): Promise<OrderEntity | null> {
        const result = await OrderModel.findOne({ uuid: uuid })

        return result ? new OrderEntity(result) : null
    }

    async delete(uuid: string, menu_uuid: string): Promise<{ success: true }> {

        const deleteCart = await OrderModel.updateOne({ uuid: uuid },
            { $pull: { menus: { menu_uuid: menu_uuid } } },
            {
                upsert: false,
                multi: true
            }

        )
        return { success: true }
    }

    async update(data: OrderEntity): Promise<{ success: true }> {

        await OrderModel.updateOne({ uuid: data.uuid }, {
            ...data.toJson()
        })

        return { success: true }
    }


    async findAll(
        specification: specificationInterface
    ): Promise<{
        total: number;
        data: OrderEntity[];
    }> {
        const total_customer = await OrderModel.find({

            ...specification.specifies(),
        }).countDocuments();
        return OrderModel.find(
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
                        return new OrderEntity(data.toJSON());
                    }),
                };
            })
            .catch((err) => {
                return err;
            });
    }

}

export default OrderRepository;
