
import { v4 as uuidv4 } from 'uuid'

import slugify from "slugify";
import MenuRepository from "../repositories/menu";
import CategoryService from "./category";
import { ErrorBadRequest, ErrorNotFound } from '../utils/errors';
import MenuEntity from '../entities/menu';
import CreateMenuRequest from '../request/createMenuRequest';
import GetMenuRequest from '../request/getMenuRequest';
import { cloud } from '../utils/cloudinary';
import GetMenuSpecification from '../repositories/specifications/getPostSpecification';

class MenuService {
    private readonly menuRepository = new MenuRepository()

    async create(data: CreateMenuRequest): Promise<{ success: true }> {
        const category = await CategoryService.findOne(data.category_uuid)
        if (!category) throw new ErrorNotFound('Kategori tidak ada', '@Service Create Product')
        const productEntity = new MenuEntity({
            uuid: uuidv4(),
            name: data.name,
            description: data.description,
            slug: slugify(data.name) + uuidv4(),
            image: 'https://res.cloudinary.com/dti2eqvdi/image/upload/v1627998960/profile/No_Image_Available_kvppd7.jpg',
            cloudinary_id: "",
            price: data.price,
            stock: null,
            category: {
                uuid: category?.uuid,
                name: category?.name
            },
            deleted_at: null,
            created_at: new Date,
            updated_at: new Date,
        })
        const entity = await this.menuRepository.create(productEntity)
        this.uploadImage(entity.uuid, data.image)

        return { success: true }
    }

    async uploadImage(uuid: string, image: string): Promise<void> {
        const upload = await cloud(image)
        const menu = await this.findOne(uuid)
        if (!menu) throw new ErrorNotFound('Menu tidak ada', '@Service menu upload image')

        menu.cloudinary_id = upload.cloudinary_id
        menu.image = upload.secure_url


        this.updateForImage(menu.uuid, menu)
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
        const category = await CategoryService.findOne(data.category_uuid)
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
            stock: null,
            category: {
                uuid: category?.uuid,
                name: category?.name
            },
            created_at: product.created_at,
            updated_at: new Date,
            deleted_at: null
        })
        await this.menuRepository.update(productEntity)
        this.updateForImage(productEntity.uuid, productEntity)
        return { success: true }
    }

    async updateForImage(uuid: string, data: MenuEntity): Promise<{ success: true }> {
        const category = await CategoryService.findOne(data.category.uuid ?? "")
        if (!category) throw new ErrorNotFound('Category not found', '@ Service Product update')
        const productEntity = new MenuEntity(data)
        await this.menuRepository.update(productEntity)
        return { success: true }
    }
    async findAll(
        data: GetMenuRequest
    ): Promise<{
        total: number;
        data: MenuEntity[];
    }> {
        return await this.menuRepository.findAll(
            new GetMenuSpecification(data)
        );
    }
}

export default new MenuService()
