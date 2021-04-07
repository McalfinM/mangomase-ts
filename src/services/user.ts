import UserRepository from '../repositories/user'
import AccessService from './accessMenu'

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
        console.log(findUser)
        const user = await UserRepository.create(name, email, password)

        return user

    }

    update = () => {

    }

    delete = () => {

    }

}

export default new UserService();