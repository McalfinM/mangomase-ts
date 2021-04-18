import express, { Request, Response, NextFunction } from 'express'
import Role from '../models/Role'
import User from '../models/User'
import UserService from '../services/user'
import { v4 as uuid } from 'uuid'
import AccessMenu from '../models/AccessMenu'
import http from 'http'
import HttpResponse from '../helpers/HttpResponse'
import { HttpErrorHandler } from '../utils/errors'

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

    findOne = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const url = req.originalUrl
            const uuid = req.app.locals.credential.uuid
            // const { uuid } = req.params
            const data = await UserService.findOne(uuid, url)

            return res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name, email, password } = req.body
            const data = await UserService.create(name, email, password)

            return res.status(201).json(data)

        } catch (error) {
            next(error)
        }
    }

    profile = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = req.app.locals.credential
            const data = await UserService.profile(user)
            return res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    async update(req: Request, res: Response, next: NextFunction): Promise<object> {
        const request = req.body
        const user = req.app.locals.credential
        return await UserService.update(request, user)
            .then(data => {
                return HttpResponse.success(req, res, { data: data })
            }).catch(error => {
                return HttpErrorHandler(error, req, res)
            })

    }

    delete = () => {
        //
    }

    // create_role = async (req: Request, res: Response, next: NextFunction)=>{

    //     const {name} = req.body
    //     const role = await Role.create(
    //         {
    //             uuid: uuid(),
    //             name: name
    //         }
    //     )

    //     return res.status(201).json(role)

    // }

    create_role = async (req: Request, res: Response, next: NextFunction) => {

        const { user_uuid, role_uuid, access } = req.body
        const role = await AccessMenu.create(
            {
                uuid: uuid(),
                user_uuid: user_uuid,
                role_uuid: role_uuid,
                access_BE: access
            }
        )

        return res.status(201).json(role)

    }
}

export default new UserController()