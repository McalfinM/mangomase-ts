import UserRepository from '../repositories/user'
import AccessService from './accessMenu'

class UserService{

    static find = async () => {

        const users = await UserRepository.find()

        return users

    }

    static findOne = async (uuid: string, url: string) => {
        
        // const user = await UserRepository.findOne(uuid)
        const access = await AccessService.findOne(uuid, url)


        return access
    }

    static create = async (name:string,email:string,password:string) => {

        const user = await UserRepository.create(name,email,password)

        return user

    }

    static update = () => {

    }

    static delete = () => {

    }

}

export default UserService