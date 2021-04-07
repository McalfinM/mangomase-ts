import express from 'express'
import { v4 as uuid } from 'uuid'
import User from '../models/User'
import Authentication from '../utils/Authentication'

class UserRepository {

    find = async () => {
        const users = await User.find()
            .where('is_verified').ne(null)
            .select('-_id -uuid -password -__v')


        return users
    }

    findOne = async (uuid: string) => {
        const user = await User.findOne({ uuid: uuid }).select('-_id -uuid -password -__v')

        return user
    }

    async findByEmail(email: string): Promise<any> {

        const user = await User.findOne({ email: email })
        return user
    }

    create = async (name: string, email: string, password: string) => {

        const hashPassword: string = await Authentication.hash(password)
        const user = User.create({
            uuid: uuid(),
            name: name,
            email: email,
            password: hashPassword,
        })

        return user
    }

    update = async () => {
        //
    }

    delete = () => {
        //
    }
}

export default new UserRepository();