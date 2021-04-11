import { Request, Response, NextFunction } from "express"
import ClanService from '../services/clan'

class ClanController {

    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const query = req.query
            const data = await ClanService.findAll(query)
            return res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
}

export default new ClanController();