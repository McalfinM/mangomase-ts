import UserEntity from '../entities/user'
import UserRepository from '../repositories/user'
import RegisterUserRequest from '../request/registerUserRequest'
import Authentication from '../utils/Authentication'
import { v4 as uuid } from 'uuid'

class UserService {

    find = async () => {

        const users = await UserRepository.find()

        return users

    }

    create = async (data: RegisterUserRequest) => {

        const findUser = await UserRepository.findByEmail(data.email)
        if (findUser) throw new Error('email already taken')
        const hashPassword: string = await Authentication.hash(data.password ?? "secret")
        const entity = new UserEntity({
            uuid: uuid(),
            email: data.email,
            name: data.name,
            username: data.username,
            password: hashPassword,
            image: 'https://res.cloudinary.com/werich1/image/upload/v1620365936/default_pet_fk1d0k.jpg',
            created_at: new Date,
            updated_at: new Date
        })
        const user = await UserRepository.create(entity)

        return user

    }


    delete = () => {

    }

}

export default new UserService();