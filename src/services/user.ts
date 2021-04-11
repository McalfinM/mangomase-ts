import UserRepository from '../repositories/user'
import AccessService from './accessMenu'
import UserEntity from '../entities/user'

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

        const data: UserEntity | null = await UserRepository.profile(user)
        if (!data) throw new Error('data not found')
        return data
    }

    update = () => {

    }

    delete = () => {

    }

}

export default new UserService();