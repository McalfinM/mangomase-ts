import { BadRequest } from "@tsed/exceptions";
import { NextFunction, Request, Response } from "express";
import CreatePartnerRequest from "../request/createPartnerRequest";
import UpadatePartnerRequest from "../request/createPartnerRequest";
import PartnerService from "../services/partner";

class PartnerController {

    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = req.app.locals.credentials
            const query = req.query
            const data = await PartnerService.getAll(query)
            return res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = req.app.locals.credentials
            const image = req.file.path
            const data = await PartnerService.create(new CreatePartnerRequest(req.body), user, image)
            return res.status(201).json({ success: true })
        } catch (error) {
            next(error)
        }
    }

    update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = req.app.locals.credentials
            const { params: { uuid } } = req
            const data = await PartnerService.update(new UpadatePartnerRequest(req.body), user, uuid)
            return res.status(200).json({ success: true })
        } catch (error) {
            next(error)
        }
    }

    findOne = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { params: { uuid } } = req
            const data = await PartnerService.findOne(uuid)
            return res.status(200).json(data)
        } catch (error) {
            next(error)
        }

    }

    delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { params: { uuid } } = req
            const data = await PartnerService.delete(uuid)
            if (!data) throw new Error('not found')
            return res.status(200).json({ success: true })
        } catch (error) {
            next(error)
        }

    }
}

export default new PartnerController();