
import CategoryEntity from "../entities/category";
import CategoryRepository from "../repositories/category";
import CreateCategoryRequest from "../request/createCategoryRequest";
import { v4 as uuid } from 'uuid'
class CategoryService {

    private readonly categoryRepository = new CategoryRepository()

    async create(data: CreateCategoryRequest): Promise<void> {
        const entity = new CategoryEntity({
            uuid: uuid(),
            name: data.name ?? ""
        })
        return await this.categoryRepository.create(entity)
    }

    async findAll(): Promise<{ data: CategoryEntity[] }> {
        return await this.categoryRepository.findAll()
    }

    async findOne(uuid: string): Promise<CategoryEntity | null> {
        return await this.categoryRepository.findOne(uuid)
    }
}

export default new CategoryService()
