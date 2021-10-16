import express, { Request, Response, NextFunction } from 'express'
import User from '../models/User'
import RegisterUserRequest from '../request/registerUserRequest'
import UserService from '../services/user'

class UserController {

    find = async (req: Request, res: Response, next: NextFunction) => {
        try {

            const data = await UserService.find()

            return res.status(200).json({
                count: data.length,
                data: data
            })
        } catch (err) {
            next(err)
        }

    }
    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = await UserService.create(new RegisterUserRequest(req.body))

            return res.status(201).json(data)

        } catch (error) {
            next(error)
        }
    }
    delete = () => {
        //
    }

}

export default new UserController()