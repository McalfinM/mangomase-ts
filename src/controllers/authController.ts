import { Request, Response, NextFunction } from 'express'
import Authentication from '../utils/Authentication'
import User from '../models/User'
import AuthService from '../services/authService'

class authController {

    register = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name, email, password } = req.body
            const data = await AuthService.register(name, email, password)
            return res.status(201).json(data)
        } catch (error) {
            next(error)
        }

    }

    login = async (req: Request, res: Response): Promise<Response> => {
        const { email, password } = req.body
        const data: any = await User.findOne({ email: email }).select('-_id -__v')

        if (!data) {
            return res.status(404).json({
                success: false,
                message: 'Email not found'
            })
        }

        const compare = await Authentication.passwordCompare(password, data.password)
        if (compare) {
            const token = await Authentication.generateToken(data.name, email, data.uuid);
            data.password = undefined;
            // data._id = undefined;

            return res.status(200).json({
                token_type: 'Bearer',
                access_token: token,
                user: data
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