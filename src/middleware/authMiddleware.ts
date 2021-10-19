import { Request, Response, NextFunction } from 'express'
import routeMiddleware from './routeMiddleware'
import jwt from 'jsonwebtoken'

export const auth = (req: Request, res: Response, next: NextFunction): any => {
    if (!req.headers.authorization) {
        return res.status(401).json('Unauthorized')
    }

    const secretKey = process.env.JWT_SECRET || 'secret'
    const token: string = req.headers.authorization.split(' ')[1]

    try {
        const credential: any = jwt.verify(token, secretKey)
        if (credential) {
            req.user = credential
            return next()
        }
        return res.status(400).json('Token invalid')
    } catch (error) {
        return res.send(error)
    }
}