import { Response, Request } from "express";
import HttpResponse from "../helpers/HttpResponse";
import CreateMenuRequest from "../request/createMenuRequest";
import GetMenuRequest from "../request/getMenuRequest";

import MenuService from "../services/menus";
import { HttpErrorHandler } from "../utils/errors";

class MenuController {



    create(req: Request, res: Response): Response | Promise<Response> {


        const user = req.app.locals.credentials
        return MenuService.create(new CreateMenuRequest({
            ...req.body,
            image: req.file?.path
        }))
            .then((result) => HttpResponse.created(req, res, result))
            .catch((err) => HttpErrorHandler(err, req, res));
    }


    update(req: Request, res: Response): Response | Promise<Response> {
        const user = req.app.locals.credential
        const { params: { uuid } } = req
        return MenuService.update(uuid, new CreateMenuRequest(req.body))
            .then((result) => HttpResponse.success(req, res, result))
            .catch((err) => HttpErrorHandler(err, req, res));
    }

    findOne(req: Request, res: Response): Response | Promise<Response> {

        const { params: { uuid } } = req;

        return MenuService.findOne(uuid)
            .then((result) => HttpResponse.success(req, res, result?.toDetailData()))
            .catch((err) => HttpErrorHandler(err, req, res));
    }
    findAll(req: Request, res: Response): Response | Promise<Response> {
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

        return MenuService.findAll(new GetMenuRequest(query))
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

    delete(req: Request, res: Response): Response | Promise<Response> {
        const { params: { uuid } } = req;
        const user = req.app.locals.credential
        return MenuService.delete(uuid, user.uuid)
            .then((result) => HttpResponse.success(req, res, result))
            .catch((err) => HttpErrorHandler(err, req, res));
    }
    findOneBySlug(req: Request, res: Response): Response | Promise<Response> {
        const { params: { slug } } = req;
        const user = req.app.locals.credential
        return MenuService.findOneBySlug(slug)
            .then((result) => HttpResponse.success(req, res, result))
            .catch((err) => HttpErrorHandler(err, req, res));
    }


}

export default new MenuController()
