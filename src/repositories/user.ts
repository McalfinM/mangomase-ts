import express from 'express'
import { v4 as uuid } from 'uuid'
import UserEntity from '../entities/user'
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

    async profile(user: { [k: string]: any }): Promise<UserEntity | null> {
        const user_data = await User.findOne({ uuid: user.uuid })

        return user_data ? new UserEntity({
            uuid: user_data.uuid ?? '',
            email: user_data.email ?? '',
            name: user_data.name ?? '',
            is_verified: user_data.is_verified ?? false,
            is_deleted: user_data.is_deleted ?? false,
            created_at: user_data.created_at ?? new Date,
            deleted_at: user_data.deleted_at ?? new Date,

        }) : null
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