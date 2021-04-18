import { NextFunction, Request, Response } from "express"
import CityService from '../services/city'
class CityController {
    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const query = req.query
            const data = await CityService.findAll(query)
            return res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    findOne = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { params: { uuid } } = req
            const data = await CityService.findOne(uuid)
            return res.status(200).json(data)
        } catch (error) {
            next(error)
        }

    }
}

export default new CityController()