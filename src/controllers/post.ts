import { BadRequest } from "@tsed/exceptions";
import { NextFunction, Request, Response } from "express";
import GetPostSpecification from "../repositories/specifications/getPostSpecification";
import CreatePostRequest from "../request/createPostRequest";
import GetPostRequest from "../request/getPostRequest";
import UpdatePostRequest from "../request/updatePostRequest";
import PostService from "../services/post";

class PostController {

    async findAll(req: Request, res: Response): Promise<any> {
        const { query } = req;
        const { page, limit, sort, ...rest } = req.query;
        const pageVal: string = page?.toString() ?? "1";
        const limitVal: string = limit?.toString() ?? "30";
        let obj = {
            totalPage: 0,
            totalData: 0,
            currentPage: '',
            limit: '',
            data: [{}]
        }
        await PostService.index(new GetPostRequest(query))
            .then((result) => {
                console.log(result, 'ini hasil')

                obj.totalPage = Math.ceil(result.total / +limitVal)
                obj.totalData = result.total || 0
                obj.currentPage = pageVal
                obj.limit = limitVal
                // res.setHeader("X-Pagination-Total-Page", Math.ceil(result.total / +limitVal));
                // res.setHeader("X-Pagination-Total-Data", result.total || 0);
                // res.setHeader("X-Pagination-Current-Page", pageVal);
                // res.setHeader("X-Pagination-Limit", limitVal);
                obj.data = result.data.map((data) => data.toListData());

            })
        console.log(obj, 'ini caonsole log')
        return res.status(200).json(obj)

    }

    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = req.app.locals.credentials
            console.log(req, 'ini file')
            const image = req.file.path
            const data = await PostService.create(new CreatePostRequest(req.body), user, image)
            return res.status(201).json({ success: true })
        } catch (error) {
            next(error)
        }
    }

    update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = req.app.locals.credentials
            const { params: { uuid } } = req
            const data = await PostService.update(new UpdatePostRequest(req.body), user, uuid)
            return res.status(200).json({ success: true })
        } catch (error) {
            next(error)
        }
    }

    findOne = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { params: { uuid } } = req
            const data = await PostService.findOne(uuid)
            return res.status(200).json(data)
        } catch (error) {
            next(error)
        }

    }

    delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { params: { uuid } } = req
            const data = await PostService.delete(uuid)
            if (!data) throw new Error('not found')
            return res.status(200).json({ success: true })
        } catch (error) {
            next(error)
        }

    }
}

export default new PostController();