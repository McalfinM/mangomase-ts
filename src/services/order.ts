
import { IUser } from "../models/interfaces/user";
import { v4 as uuidV4 } from 'uuid'
import OrderRepository from "../repositories/order";
import CreateCartRequest from "../request/createCartRequest";
import { IMenuEntity } from "../entities/interfaces/menu";
import MenuService from "./menus";
import OrderEntity from "../entities/order";
import { ErrorNotFound } from "../utils/errors";
import { IOrderMenuEntity } from "../entities/interfaces/order";
import GetOrderRequest from "../request/getOrderRequest";
import GetOrderSpefication from "../repositories/specifications/getOrderSpecification";
import { OrderStatus } from "../entities/enums/orderStatus";

class OrderService {

    private readonly orderRepository = new OrderRepository()

    async create(data: CreateCartRequest): Promise<{ uuid: string }> {
        let menu = []
        for (let i = 0; i < data.carts.length; i++) {
            const searchProduct = await MenuService.findOne(data.carts[i].menu_uuid)
            if (!searchProduct) throw new ErrorNotFound('Product tidak ada', '@Service create or update cart')
            menu.push({
                uuid: uuidV4(),
                name: searchProduct.name,
                image: searchProduct.image,
                price: searchProduct.price,
                menu_uuid: searchProduct.uuid,
                quantity: data.carts[i].quantity
            })
        }

        let entityCart = new OrderEntity({
            uuid: uuidV4(),
            name: data.customer_name ?? "",
            menus: menu,
            quantity: menu.reduce((prev, curr) => prev + curr.quantity, 0),
            status: OrderStatus.ORDER,
            updated_at: new Date(),
            created_at: new Date(),
            order_id: 'MM' + new Date().getTime()
        })

        await this.orderRepository.create(entityCart);
        return {
            uuid: entityCart.uuid
        }
    }

    async createOrUpdate(uuid: string, data: CreateCartRequest): Promise<{ success: true }> {
        const searchCart = await this.orderRepository.findOneMyCart(uuid)

        if (!searchCart) {
            throw new ErrorNotFound('Keranjang tidak ditemukan', '@Service Order => Create Or Update')
        } else {
            let menu = []
            for (let i = 0; i < data.carts.length; i++) {
                const searchProduct = await MenuService.findOne(data.carts[i].menu_uuid)
                if (!searchProduct) throw new ErrorNotFound('Product tidak ada', '@Service create or update cart')
                menu.push({
                    uuid: uuidV4(),
                    name: searchProduct.name,
                    image: searchProduct.image,
                    price: searchProduct.price,
                    menu_uuid: searchProduct.uuid,
                    quantity: data.carts[i].quantity
                })

            }


            let entityCart = new OrderEntity({
                uuid: searchCart.uuid,
                menus: menu,
                name: data.customer_name ?? searchCart.name,
                quantity: searchCart.quantity,
                status: OrderStatus.ORDER,
                updated_at: new Date(),
                created_at: new Date(),
                order_id: searchCart.order_id
            })
            const total_quentity = menu.reduce((prev, curr) => Number(prev) + Number(curr.quantity), 0)
            entityCart.quantity = total_quentity

            await this.orderRepository.update(entityCart)



        }


        return { success: true };
    }

    async delete(uuid: string, menu_uuid: string): Promise<{ success: true }> {
        const deleteProduct = await this.orderRepository.delete(uuid, menu_uuid)
        if (!deleteProduct) throw new ErrorNotFound('Data not found', '@Service Cart Delete')
        const order = await this.findOne(uuid)
        if (!order) throw new ErrorNotFound('Order tidak ditemukan', '@Service order delete')
        order.quantity = order.menus.reduce((prev, curr) => Number(prev) + Number(curr.quantity), 0)
        this.orderRepository.update(order)
        return { success: true }
    }

    async minusQuantity(uuid: string, menu_uuid: string): Promise<{ success: true }> {
        const searchCart = await this.orderRepository.findOneMyCart(uuid)
        if (!searchCart) throw new ErrorNotFound('You did\'t have a cart', '@Service Minus Quantity Cart')
        let product: IOrderMenuEntity[] = []

        const searchProduct = await MenuService.findOne(menu_uuid)
        if (!searchProduct) throw new ErrorNotFound('Product not found', '@Service create or update cart')
        for (let i = 0; i < searchCart.menus.length; i++) {

            if (searchCart.menus[i].menu_uuid === menu_uuid) {

                await this.orderRepository.delete(searchCart.menus[i].uuid ?? '', menu_uuid)
                searchCart.menus[i].quantity -= 1
                const quantity = searchCart.quantity = searchCart.menus.reduce(((prev, curr) => Number(prev) + Number(curr.quantity)), 0)

                return await this.orderRepository.update(searchCart);

            }
        }
        // const quantity = searchCart.quantity = searchCart.menus.reduce(((prev, curr) => Number(prev) + Number(curr.quantity)), 0)
        // product.push({
        //     uuid: searchProduct.uuid,
        //     name: searchProduct?.name ?? '',
        //     image: searchProduct?.image ?? '',
        //     price: searchProduct?.price ?? 0,
        //     menu_uuid: searchProduct?.uuid ?? '',
        //     quantity: 1
        // })
        // let concat = searchCart.menus.concat(product)

        // let entityCart = new OrderEntity({
        //     uuid: searchCart.uuid,
        //     menus: concat,
        //     name: searchCart.name,
        //     quantity: quantity,
        //     updated_at: new Date(),
        //     created_at: new Date(),
        //     order_id: searchCart.order_id
        // })

        // await this.orderRepository.update(entityCart);

        return { success: true }
    }

    async findOne(uuid: string): Promise<OrderEntity | null> {
        const result = await this.orderRepository.findOne(uuid)

        return result ? new OrderEntity(result) : null
    }


    async findAll(
        data: GetOrderRequest
    ): Promise<{
        total: number;
        data: OrderEntity[];
    }> {
        const order = await this.orderRepository.findAll(
            new GetOrderSpefication(data)
        )
        return order
    }

    async findOneMyCart(user_uuid: string): Promise<OrderEntity | null> {
        const cart = await this.orderRepository.findOneMyCart(user_uuid)
        return cart ? new OrderEntity(cart) : null
    }

}

export default new OrderService()
