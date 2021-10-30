import { Request, Response } from "express"
import HttpResponse from "../helpers/HttpResponse"
import CreateCouponRequest from "../request/createCouponRequest"
import CreatePaymentRequest from "../request/createPaymentRequest"
import GetPaymentRequest from "../request/getPaymentRequest"
import PaymentService from '../services/payment'
import { HttpErrorHandler } from "../utils/errors"
class PaymentController {

    async create(req: Request, res: Response): Promise<Response> {
        const { params: { order_uuid } } = req
        const data = await PaymentService.create(order_uuid, new CreatePaymentRequest(req.body))
        return HttpResponse.created(req, res, data.toDetailData())
    }

    async findOne(req: Request, res: Response): Promise<Response> {
        return await PaymentService.findOne(req.params.uuid)
            .then(result => {
                return HttpResponse.success(req, res, result?.toDetailData())
            })
    }

    findAll(req: Request, res: Response): Promise<Response> {
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

        return PaymentService.findAll(new GetPaymentRequest(query))
            .then((result) => {
                obj.totalPage = Math.ceil(result.total / +limitVal)
                obj.totalData = result.total || 0
                obj.currentPage = pageVal
                obj.limit = limitVal
                // res.setHeader("X-Pagination-Total-Page", Math.ceil(result.total / +limitVal));
                // res.setHeader("X-Pagination-Total-Data", result.total || 0);
                // res.setHeader("X-Pagination-Current-Page", pageVal);
                // res.setHeader("X-Pagination-Limit", limitVal);
                obj.data = result.data.map((data) => data.toListData());

                return HttpResponse.success(req, res, obj);
            })

            .catch(err => HttpErrorHandler(err, req, res))
    }
}

export default new PaymentController()
