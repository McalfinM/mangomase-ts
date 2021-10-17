
import OrderEntity from "../entities/order";
import OrderModel from "../models/order";
import specificationInterface from "./specifications/specificationInterface";


class OrderRepository {


    async create(data: OrderEntity): Promise<{ success: true }> {

        await OrderModel.create({
            uuid: data.uuid,
            quantity: data.quantity,
            menus: data.menus,
            order_id: data.order_id,
            created_by: data.created_by,
            created_at: data.created_at,
            updated_at: data.updated_at,
        })

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

    async delete(uuid: string, user_uuid: string): Promise<{ success: true }> {

        const deleteCart = await OrderModel.updateOne({ "created_by.uuid": user_uuid, "menus.uuid": uuid },
            { $pull: { menus: { uuid: uuid } } },
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


    async findAll(user_uuid: string): Promise<OrderEntity | null> {
        const cart = await OrderModel.findOne({ "created_by.uuid": user_uuid })

        return cart ? new OrderEntity(cart) : null
    }


}

export default OrderRepository;
