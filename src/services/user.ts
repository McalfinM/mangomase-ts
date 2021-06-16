import UserRepository from '../repositories/user'
import AccessService from './accessMenu'
import UserEntity from '../entities/user'
import { BadRequest } from '@tsed/exceptions'
import ProvinceService from '../services/province'
import CityService from '../services/city'
import UpdatePasswordUser from '../request/updatePasswordUser'
import User from '../models/User'
import Authentication from '../utils/Authentication'
import { ErrorNotFound } from '../utils/errors'
import UpdateImageRequest from '../request/updateProfilePicture'
import PostService from '../services/post'
import { cloud } from '../utils/cloudinary'
import PostEntity from '../entities/post'

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
        const searchPost = await PostService.updateManyCity(user.uuid, city?.getUuid ?? '')
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

    async findOneUser(uuid: string): Promise<UserEntity | null> {
        const user = await UserRepository.findOneUser(uuid)
        if (!user) throw new Error('User not found')
        return user ? new UserEntity({
            uuid: user.uuid,
            name: user.name,
            email: user.email,
            city_uuid: user.city_uuid ?? '',
            province_uuid: user.province_uuid ?? '',
        }) : null
    }

    async updatePassword(data: UpdatePasswordUser, user: UserEntity): Promise<UserEntity> {
        const findUser = await UserRepository.findForPassword(user.uuid ?? '')
        if (!findUser) throw new ErrorNotFound('User Not Found', 'Update Password User')
        const compare = await Authentication.passwordCompare(data.current_password, findUser.password ?? '')
        if (!compare) throw new ErrorNotFound("Compare Password Failed", 'Update Password')

        if (data.password !== data.confirm_password) throw new ErrorNotFound('Password didn\'t match', 'Update Password User')
        const hashPassword: string = await Authentication.hash(data.password)

        const userEntity = new UserEntity({
            uuid: findUser.uuid,
            name: findUser.name,
            email: findUser.email,
            city_uuid: findUser.city_uuid,
            province_uuid: findUser.province_uuid,
            password: hashPassword ?? '',
        })
        return await UserRepository.updatePassword(userEntity)
    }

    async changeProfilePicture(data: UpdateImageRequest, user: UserEntity) {
        const userResult = await UserRepository.findOneUser(user.uuid ?? '')
        if (!userResult) throw new ErrorNotFound('User not Found', 'Change Profile Pciture')
        console.log(data.image, 'ini image')
        if (data.image !== 'https://res.cloudinary.com/werich1/image/upload/v1620365936/default_pet_fk1d0k.jpg') {
            await cloud.uploader.destroy(userResult.cloudinary_id ?? '')
        }
        const userEntity = new UserEntity({
            uuid: userResult.uuid,
            name: userResult.name,
            email: userResult.email,
            city_uuid: userResult.city_uuid,
            province_uuid: userResult.province_uuid,
            cloudinary_id: data.cloudinary_id,
            image: data.image
        })
        return await UserRepository.updatePassword(userEntity)
    }

    delete = () => {

    }

}

export default new UserService();