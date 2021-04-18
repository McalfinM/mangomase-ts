import { NextFunction, Request, Response } from "express";
import CreateCommentPostRequest from "../request/createCommentPostRequest";
import UpdatePostRequest from "../request/updatePostRequest";
import CommentService from "../services/comment";

class CommentController {

    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = req.app.locals.credential
            const data = await CommentService.create(new CreateCommentPostRequest(req.body), user)
            return res.status(201).json({ success: true })
        } catch (error) {
            next(error)
        }
    }

    update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = req.app.locals.credentials
            const { params: { uuid } } = req
            const data = await CommentService.update(new CreateCommentPostRequest(req.body), uuid, user)
            return res.status(200).json({ success: true })
        } catch (error) {
            next(error)
        }
    }

}

export default new CommentController();