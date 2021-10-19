
import MenuEntity from "../entities/menu";
import MenuModel from "../models/menu";
import specificationInterface from "./specifications/specificationInterface";

class MenuRepository {
    async create(data: MenuEntity): Promise<MenuEntity> {
        const result = await MenuModel.create({
            uuid: data.uuid,
            category: data.category,
            cloudinary_id: data.cloudinary_id,
            description: data.description,
            name: data.name,
            image: data.image,
            price: data.price,
            slug: data.slug,
            created_at: data.created_at,
            updated_at: data.updated_at,
            deleted_at: data.deleted_at
        })

        return new MenuEntity(result)
    }
    async update(data: MenuEntity): Promise<{ success: true }> {
        const result = await MenuModel.updateOne({ uuid: data.uuid }, {
            ...data.toJson()
        })

        return { success: true }
    }
    async findOne(uuid: string): Promise<MenuEntity | null> {
        const result = await MenuModel.findOne({ uuid: uuid })

        return result ? new MenuEntity(result) : null
    }

    async findOneBySlug(slug: string): Promise<MenuEntity | null> {
        const result = await MenuModel.findOne({ slug: slug })

        return result ? new MenuEntity(result) : null
    }

    async delete(uuid: string, user_uuid: string): Promise<{ success: true }> {
        const result = await MenuModel.updateOne({ uuid: uuid, "created.by": user_uuid }, {
            deleted_at: new Date
        })

        return { success: true }
    }

    async reduceStock(uuid: string, quantity: number): Promise<void> {
        await MenuModel.updateOne({ uuid }, {
            $set: {
                stock: quantity
            }
        })
    }

    async findAll(
        specification: specificationInterface
    ): Promise<{
        total: number;
        data: MenuEntity[];
    }> {
        const total_customer = await MenuModel.find({

            ...specification.specifies(),
        }).countDocuments();
        return MenuModel.find(
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
                        return new MenuEntity({
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

export default MenuRepository;
