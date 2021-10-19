import { Request, Response } from "express"
import HttpResponse from "../helpers/HttpResponse"
import CreateCategoryRequest from "../request/createCategoryRequest"
import CategoryService from "../services/category"

class CategoryController {

    async create(req: Request, res: Response): Promise<Response> {

        await CategoryService.create(new CreateCategoryRequest(req.body))
        return HttpResponse.created(req, res, { success: true })
    }

    async findAll(req: Request, res: Response): Promise<Response> {
        return await CategoryService.findAll()
            .then(result => {
                return HttpResponse.success(req, res, result.data)
            })
    }

    async findOne(req: Request, res: Response): Promise<Response> {
        return await CategoryService.findOne(req.params.uuid)
            .then(result => {
                return HttpResponse.success(req, res, result?.toDetailData())
            })
    }
}

export default new CategoryController()
