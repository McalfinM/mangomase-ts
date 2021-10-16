import { Request, Response, NextFunction } from 'express'
import Authentication from '../utils/Authentication'
import User from '../models/User'
import UserService from '../services/user'
import RegisterUserRequest from '../request/registerUserRequest'

class authController {

    register = async (req: Request, res: Response, next: NextFunction) => {
        try {

            const data = await UserService.create(new RegisterUserRequest(req.body))
            return res.status(201).json({ success: true })
        } catch (error) {
            next(error)
        }

    }

    login = async (req: Request, res: Response): Promise<Response> => {
        const { username, password } = req.body
        const data: any = await User.findOne({ username: username })

        if (!data) {
            return res.status(404).json({
                success: false,
                message: 'Data not found'
            })
        }

        const compare = await Authentication.passwordCompare(password, data.password)

        if (compare) {
            const token = await Authentication.generateToken(data.name, username, data.uuid);
            data.password = undefined;
            // data._id = undefined;
            return res.status(200).json({
                token_type: 'Bearer',
                access_token: token,
                user: data.uuid
            })
        }

        return res.status(403).json('Invalid email or password')
    }

    profile = async (req: Request, res: Response) => {
        const profile = req.app.locals.credential
        return res.status(200).json(profile)
    }

}

export default new authController()