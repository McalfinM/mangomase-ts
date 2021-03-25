import { BadRequest } from "@tsed/exceptions";
import { NextFunction, Request, Response } from "express";
import CreatePostRequest from "../request/createPostRequest";
import UpdatePostRequest from "../request/updatePostRequest";
import PostService from "../services/post";

class PostController {

    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = req.app.locals.credentials
            const query = req.query
            const data = await PostService.getAll(query)
            return res.status(200).json(data)
        } catch (error) {
            next(error)
        }
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