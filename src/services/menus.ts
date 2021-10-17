
import { v4 as uuidv4 } from 'uuid'

import slugify from "slugify";
import MenuRepository from "../repositories/menu";
import CategoryService from "./category";
import { ErrorBadRequest, ErrorNotFound } from '../utils/errors';
import MenuEntity from '../entities/menu';
import CreateMenuRequest from '../request/createMenuRequest';
import GetMenuRequest from '../request/getMenuRequest';
import { cloud } from '../utils/cloudinary';

class MenuService {
    private readonly menuRepository = new MenuRepository()
    private readonly categoryService = new CategoryService()

    async create(data: CreateMenuRequest): Promise<{ success: true }> {
        console.log(data.image, 'ini image')
        const uploadImage = await cloud(data.image)
        if (!uploadImage) throw new ErrorBadRequest('Image failed to upload', '@Service create => menu')
        const category = await this.categoryService.findOne(data.category_uuid)
        if (!category) throw new ErrorNotFound('Kategori tidak ada', '@Service Create Product')
        const productEntity = new MenuEntity({
            uuid: uuidv4(),
            name: data.name,
            description: data.description,
            slug: slugify(data.name) + uuidv4(),
            image: uploadImage.secure_url ?? 'https://res.cloudinary.com/dti2eqvdi/image/upload/v1627998960/profile/No_Image_Available_kvppd7.jpg',
            cloudinary_id: uploadImage.cloudinary_id ?? 'https://res.cloudinary.com/dti2eqvdi/image/upload/v1627998960/profile/No_Image_Available_kvppd7.jpg',
            price: data.price,
            category: {
                uuid: category?.uuid,
                name: category?.name
            },
            deleted_at: null,
            created_at: new Date,
            updated_at: new Date,
        })
        await this.menuRepository.create(productEntity)

        return { success: true }
    }

    async findOne(uuid: string): Promise<MenuEntity | null> {

        const product = await this.menuRepository.findOne(uuid);
        return product ? new MenuEntity(product) : null;
    }

    async findOneBySlug(slug: string): Promise<MenuEntity | null> {
        const result = await this.menuRepository.findOneBySlug(slug)

        return result ? new MenuEntity(result) : null
    }
    async delete(uuid: string, user_uuid: string): Promise<{ success: true }> {
        const result = await this.menuRepository.delete(uuid, user_uuid)

        return { success: true }
    }
    async update(uuid: string, data: CreateMenuRequest): Promise<{ success: true }> {
        const category = await this.categoryService.findOne(data.category_uuid)
        if (!category) throw new ErrorNotFound('Category not found', '@ Service Product update')
        const product = await this.menuRepository.findOne(uuid)
        if (!product) throw new ErrorNotFound('Category not found', '@ Service Product update')
        let slugi = ''
        if (product.name !== data.name) {
            slugi = slugify(data.name) + uuidv4()
        } else {
            slugi = product.slug
        }
        const productEntity = new MenuEntity({
            uuid: product.uuid,
            name: data.name,
            description: data.description,
            slug: slugi,
            image: data.image ?? product.image,
            cloudinary_id: product.cloudinary_id,
            price: data.price,
            category: {
                uuid: category?.uuid,
                name: category?.name
            },
            created_at: product.created_at,
            updated_at: new Date,
            deleted_at: null
        })
        await this.menuRepository.update(productEntity)
        return { success: true }
    }
    // async findAll(
    //     data: GetMenuRequest
    // ): Promise<{
    //     total: number;
    //     data: MenuEntity[];
    // }> {
    //     return await this.menuRepository.findAll(
    //         new GetProductSpecification(data)
    //     );
    // }
}

export default new MenuService()
