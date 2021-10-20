import { Request, Response } from "express"
import HttpResponse from "../helpers/HttpResponse"
import CreateCouponRequest from "../request/createCouponRequest"
import CreatePaymentRequest from "../request/createPaymentRequest"
import PaymentService from '../services/payment'
class PaymentController {

    async create(req: Request, res: Response): Promise<Response> {
        const { params: { order_uuid } } = req
        await PaymentService.create(order_uuid, new CreatePaymentRequest(req.body))
        return HttpResponse.created(req, res, { success: true })
    }

    // async findAll(req: Request, res: Response): Promise<Response> {
    //     return await PaymentService.findAll()
    //         .then(result => {
    //             return HttpResponse.success(req, res, result.data.map(v => v.toListData()))
    //         })
    // }

    async findOne(req: Request, res: Response): Promise<Response> {
        return await PaymentService.findOne(req.params.uuid)
            .then(result => {
                return HttpResponse.success(req, res, result?.toDetailData())
            })
    }
}

export default new PaymentController()
