import { Request, Response, NextFunction, response } from 'express'
import HttpException from '../exception/HttpException'

function errorMiddleware(error: HttpException, req: Request, res: Response, next: NextFunction) {
    const status = error.status || 500
    const message = error.message || 'Error occurred.'

    res.status(status).send({ status, message })
}

export default errorMiddleware