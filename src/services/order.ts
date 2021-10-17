
import { IUser } from "../models/interfaces/user";
import { v4 as uuidV4 } from 'uuid'
import OrderRepository from "../repositories/order";
import CreateCartRequest from "../request/createCartRequest";
import { IMenuEntity } from "../entities/interfaces/menu";
import MenuService from "./menus";
import OrderEntity from "../entities/order";
import { ErrorNotFound } from "../utils/errors";
import { IOrderMenuEntity } from "../entities/interfaces/order";

class OrderService {

    private readonly orderService = new OrderRepository()

    async createOrUpdate(data: CreateCartRequest, user: IUser): Promise<{ success: true }> {
        const searchCart = await this.orderService.findOneMyCart(data.uuid)
        let menus: IOrderMenuEntity[] = []

        if (!searchCart) {
            const searchProduct = await MenuService.findOne(data.menu_uuid)
            if (!searchProduct) throw new ErrorNotFound('Product not found', '@Service create or update cart')
            menus.push({
                uuid: uuidV4(),
                name: searchProduct.name,
                image: searchProduct.image,
                price: searchProduct.price,
                quantity: 1,
                menu_uuid: searchProduct.uuid
            })

            let entityCart = new OrderEntity({
                uuid: uuidV4(),
                menus: menus,
                quantity: menus.length,
                updated_at: new Date(),
                created_at: new Date(),
                created_by: {},
                order_id: 'MM' + new Date().getTime()
            })
            await this.orderService.create(entityCart);
        } else {
            const searchProduct = await MenuService.findOne(data.menu_uuid)
            if (!searchProduct) throw new ErrorNotFound('Product not found', '@Service create or update cart')
            for (let i = 0; i < searchCart.menus.length; i++) {

                if (searchCart.menus[i].uuid === data.uuid) {

                    await this.orderService.delete(searchCart.menus[i].uuid ?? '', user.uuid)
                    searchCart.menus[i].quantity += 1
                    searchCart.quantity = searchCart.menus[i].quantity

                    return await this.orderService.update(searchCart);

                }
            }

            menus.push({
                uuid: uuidV4(),
                name: searchProduct?.name ?? '',
                image: searchProduct?.image ?? '',
                price: searchProduct?.price ?? 0,
                menu_uuid: searchProduct?.uuid ?? '',
                quantity: 1
            })
            let concat = searchCart.menus.concat(menus)

            let entityCart = new OrderEntity({
                uuid: searchCart.uuid,
                menus: concat,
                quantity: menus.length,
                updated_at: new Date(),
                created_at: new Date(),
                created_by: searchCart.created_by,
                order_id: searchCart.order_id
            })
            await this.orderService.update(entityCart);

        }


        return { success: true };
    }

    async delete(uuid: string, user_uuid: string): Promise<{ success: true }> {
        const deleteProduct = await this.orderService.delete(uuid, user_uuid)
        if (!deleteProduct) throw new ErrorNotFound('Data not found', '@Service Cart Delete')
        const searchMyCart = await this.orderService.findOneMyCart(user_uuid)
        if (!searchMyCart) throw new ErrorNotFound('data not found', '@Service Delete Cart')
        const searchCart = await this.orderService.update(searchMyCart)
        return { success: true }
    }

    async minusQuantity(uuid: string, user_uuid: string): Promise<{ success: true }> {
        const searchCart = await this.orderService.findOneMyCart(user_uuid)
        if (!searchCart) throw new ErrorNotFound('You did\'t have a cart', '@Service Minus Quantity Cart')
        let product: IOrderMenuEntity[] = []

        const searchProduct = await MenuService.findOne(uuid)
        if (!searchProduct) throw new ErrorNotFound('Product not found', '@Service create or update cart')
        for (let i = 0; i < searchCart.menus.length; i++) {

            if (searchCart.menus[i].menu_uuid === uuid) {

                await this.orderService.delete(searchCart.menus[i].uuid ?? '', user_uuid)
                searchCart.menus[i].quantity -= 1
                searchCart.quantity = searchCart.menus[i].quantity

                return await this.orderService.update(searchCart);

            }
        }

        product.push({
            uuid: uuidV4(),
            name: searchProduct?.name ?? '',
            image: searchProduct?.image ?? '',
            price: searchProduct?.price ?? 0,
            menu_uuid: searchProduct?.uuid ?? '',
            quantity: 1
        })
        let concat = searchCart.menus.concat(product)

        let entityCart = new OrderEntity({
            uuid: searchCart.uuid,
            created_by: {},
            menus: concat,
            quantity: product.length,
            updated_at: new Date(),
            created_at: new Date(),
            order_id: searchCart.order_id
        })
        await this.orderService.update(entityCart);

        return { success: true }
    }

    async findOne(uuid: string, user_uuid: string): Promise<OrderEntity | null> {
        const result = await this.orderService.findOne(uuid)

        return result ? new OrderEntity(result) : null
    }


    async findAll(user_uuid: string): Promise<OrderEntity | null> {
        return await this.orderService.findAll(user_uuid)
    }

    async findOneMyCart(user_uuid: string): Promise<OrderEntity | null> {
        const cart = await this.orderService.findOneMyCart(user_uuid)
        return cart ? new OrderEntity(cart) : null
    }

}

export default OrderService
