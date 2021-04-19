import express from 'express'
import { v4 as uuid } from 'uuid'
import CityEntity from '../entities/cityEntity'
import ProvinceEntity from '../entities/province'
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

    async findOne(uuid: string): Promise<UserEntity | null> {
        const user = await User.findOne({ uuid: uuid }).select('-_id -uuid -password -__v')
        return user ? new UserEntity({
            uuid: user.uuid ?? '',
            email: user.email ?? '',
            name: user.name ?? '',
            image: user.image ?? '',
            city_uuid: user.city_uuid ?? '',
            province_uuid: user.province_uuid ?? '',
            is_verified: user.is_verified ?? false,
            is_deleted: user.is_deleted ?? false,
            created_at: user.created_at ?? new Date,
            deleted_at: user.deleted_at ?? new Date,

        }) : null
    }

    async findByEmail(email: string): Promise<any> {

        const user = await User.findOne({ email: email })
        return user
    }

    async profile(user: { [k: string]: any }, province: ProvinceEntity | null, city: CityEntity | null): Promise<UserEntity | null> {
        const user_data = await User.findOne({ uuid: user.uuid }).populate('province')
            .populate('city')
            .exec()

        return user_data ? new UserEntity({
            uuid: user_data.uuid ?? '',
            email: user_data.email ?? '',
            name: user_data.name ?? '',
            image: user_data.image ?? '',
            city_uuid: user_data.city_uuid ?? '',
            province: province,
            city: city,
            province_uuid: user_data.province_uuid ?? '',
            is_verified: user_data.is_verified ?? false,
            is_deleted: user_data.is_deleted ?? false,
            created_at: user_data.created_at ?? new Date,
            deleted_at: user_data.deleted_at ?? new Date,

        }) : null
    }

    create = async (name: string, email: string, password: string) => {

        const hashPassword: string = await Authentication.hash(password)
        const user = await User.create({
            uuid: uuid(),
            name: name,
            email: email,
            password: hashPassword,
            province_uuid: null,
            city_uuid: null,
            created_at: new Date
        })

        return user
    }

    update = async (data: UserEntity) => {
        const user = await User.updateOne({ uuid: data.uuid }, {
            name: data.name,
            city_uuid: data.city_uuid ?? '',
            province_uuid: data.province_uuid ?? ''
        })

        return user
    }

    updatePassword = async (data: UserEntity) => {
        const user = await User.updateOne({ uuid: data.uuid }, {
            $set: {
                password: data.password
            }
        })

        return user
    }

    async findOneUser(uuid: string): Promise<UserEntity | null> {
        const user = await User.findOne({ uuid: uuid })

        return user ? new UserEntity({
            uuid: user.uuid ?? '',
            email: user.email ?? '',
            name: user.name ?? '',
            image: user.image ?? '',
            city_uuid: user.city_uuid ?? '',
            province_uuid: user.province_uuid ?? '',
            is_verified: user.is_verified ?? false,
            is_deleted: user.is_deleted ?? false,
            created_at: user.created_at ?? new Date,
            deleted_at: user.deleted_at ?? new Date,

        }) : null
    }

    delete = () => {
        //
    }
}

export default new UserRepository();