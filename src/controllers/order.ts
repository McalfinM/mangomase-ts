import { Response, Request } from "express";
import HttpResponse from "../helpers/HttpResponse";
import CreateCartRequest from "../request/createCartRequest";
import GetOrderRequest from "../request/getOrderRequest";
import OrderService from '../services/order'
import { HttpErrorHandler } from "../utils/errors";
class OrderController {
    async create(req: Request, res: Response): Promise<Response> {
        const user = req.user
        return OrderService.create(new CreateCartRequest(req.body))
            .then((result) => {
                return HttpResponse.created(req, res, result);
            })
            .catch((err) => HttpErrorHandler(err, req, res));
    }
    async createOrUpdate(req: Request, res: Response): Promise<Response> {
        const user = req.user
        const { params: { uuid } } = req
        return OrderService.createOrUpdate(uuid, new CreateCartRequest(req.body))
            .then((result) => {
                return HttpResponse.created(req, res, result);
            })
            .catch((err) => HttpErrorHandler(err, req, res));
    }

    async findOne(req: Request, res: Response): Promise<Response> {

        const { params: { uuid } } = req
        const user = req.user
        return OrderService.findOne(uuid)
            .then((result) => {
                return HttpResponse.success(req, res, result);
            })
            .catch((err) => HttpErrorHandler(err, req, res));
    }

    async delete(req: Request, res: Response): Promise<Response> {

        const { params: { uuid } } = req
        const { body: { menu_uuid } } = req
        return OrderService.delete(uuid, menu_uuid)
            .then((result) => {
                return HttpResponse.success(req, res, result);
            })
            .catch((err) => HttpErrorHandler(err, req, res));
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

        return OrderService.findAll(new GetOrderRequest(query))
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

    minusQuantity(req: Request, res: Response): Promise<Response> {
        const user = req.user
        const { params: { uuid } } = req
        const { body: { menu_uuid } } = req
        return OrderService.minusQuantity(uuid, menu_uuid)
            .then((result) => {
                return HttpResponse.success(req, res, result);
            })
            .catch((err) => HttpErrorHandler(err, req, res));
    }

}

export default new OrderController()
