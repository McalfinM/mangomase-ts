import { Request, Response } from "express"
import HttpResponse from "../helpers/HttpResponse"
import CreateCouponRequest from "../request/createCouponRequest"
import CouponService from '../services/coupon'
class CouponController {

    async create(req: Request, res: Response): Promise<Response> {

        await CouponService.create(new CreateCouponRequest(req.body))
        return HttpResponse.created(req, res, { success: true })
    }

    async findAll(req: Request, res: Response): Promise<Response> {
        return await CouponService.findAll()
            .then(result => {
                return HttpResponse.success(req, res, result.data.map(v => v.toListData()))
            })
    }

    async findOne(req: Request, res: Response): Promise<Response> {
        return await CouponService.findOne(req.params.uuid)
            .then(result => {
                return HttpResponse.success(req, res, result?.toDetailData())
            })
    }
}

export default new CouponController()
