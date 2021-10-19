
import CategoryEntity from "../entities/category";
import CategoryModel from "../models/category";
import specificationInterface from "./specifications/specificationInterface";

class CategoryRepository {


    async create(data: CategoryEntity): Promise<void> {
        await CategoryModel.create({
            uuid: data.uuid,
            name: data.name
        })

    }


    async findAll(): Promise<{ data: CategoryEntity[] }> {
        return CategoryModel.find()
            .then(result => {
                return {
                    data: result.map(data => {
                        return new CategoryEntity({
                            uuid: data.uuid,
                            name: data.name
                        })
                    })
                }
            })
    }

    async findOne(uuid: string): Promise<CategoryEntity | null> {

        const response = await CategoryModel.findOne({ uuid: uuid })

        return response ? new CategoryEntity(response) : null
    }

}

export default CategoryRepository
