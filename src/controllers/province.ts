import { BadRequest } from "@tsed/exceptions";
import { NextFunction, Request, Response } from "express";
import ProvinceService from "../services/province";

class ProvinceController {

    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const query = req.query
            const data = await ProvinceService.findAll(query)
            return res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    findOne = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { params: { uuid } } = req
            const data = await ProvinceService.findOne(uuid)
            return res.status(200).json(data)
        } catch (error) {
            next(error)
        }

    }


}

export default new ProvinceController();