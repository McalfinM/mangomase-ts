import UserRepository from '../repositories/user'
import AccessService from './accessMenu'
import UserEntity from '../entities/user'
import { BadRequest } from '@tsed/exceptions'
import ProvinceService from '../services/province'
import CityService from '../services/city'

class UserService {

    find = async () => {

        const users = await UserRepository.find()

        return users

    }

    findOne = async (uuid: string, url: string) => {

        // const user = await UserRepository.findOne(uuid)
        const access = await AccessService.findOne(uuid, url)


        return access
    }

    create = async (name: string, email: string, password: string) => {

        const findUser = await UserRepository.findByEmail(email)
        if (findUser) throw new Error('email already taken')
        const user = await UserRepository.create(name, email, password)

        return user

    }

    async profile(user: { [k: string]: any }): Promise<UserEntity> {
        const searchUser = await UserRepository.findOne(user.uuid)
        const province = await ProvinceService.findOneChange(searchUser?.province_uuid ?? '')
        const city = await CityService.findOneChange(searchUser?.city_uuid ?? '')
        const data = await UserRepository.profile(user, province, city)
        if (!data) throw new Error('data not found')
        return data
    }

    async update(data: { [k: string]: any }, user: { [k: string]: any }): Promise<UserEntity> {
        const searchUser = await UserRepository.findOne(user.uuid)
        const province = await ProvinceService.findOne(data.province_uuid)
        const city = await CityService.findOne(data.city_uuid)
        if (!searchUser) throw new BadRequest('User not found')
        const userEntity = new UserEntity({
            uuid: user.uuid,
            name: data.name,
            email: data.email,
            city_uuid: city?.getUuid ?? '',
            province_uuid: province?.getUuid ?? '',
        })
        return await UserRepository.update(userEntity)
    }

    delete = () => {

    }

}

export default new UserService();