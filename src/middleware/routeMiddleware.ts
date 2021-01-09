import express, { Request,Response,NextFunction } from 'express'
import jwt from 'jsonwebtoken'

class RouteMiddlewarre {
    static extractJwt (req:Request,res:Response,next:NextFunction) {
        if (!req.headers.authorization) {
            return res.status(401).json('Unauthorized')
        }

        const secretKey = process.env.JWT_SECRET || 'secret'
        const token: string = req.headers.authorization.split(' ')[1]

        try {
            const credential: string | object = jwt.verify(token, secretKey)
            if (credential) {
                req.app.locals.credential = credential

                return next()
            }
            return res.status(400).json('Token invalid')
        } catch (error) {
            return res.send(error)
        }
    
    }
    
    // static checkRole (role: Rolereq: Request, res: Response, next: NextFunction) {
    //     //
    // }

}


export default RouteMiddlewarre