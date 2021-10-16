
import UserEntity from '../entities/user'
import User from '../models/User'
import Authentication from '../utils/Authentication'

class UserRepository {

    find = async () => {
        const users = await User.find()

        return users
    }

    async findByEmail(email: string): Promise<any> {

        const user = await User.findOne({ email: email })
        return user
    }



    async create(data: UserEntity): Promise<void> {


        const user = await User.create({
            uuid: data.uuid,
            name: data.name,
            email: data.email,
            username: data.username,
            password: data.password,
            image: 'https://res.cloudinary.com/werich1/image/upload/v1620365936/default_pet_fk1d0k.jpg',
            created_at: new Date,
            updated_at: new Date
        })


    }
}

export default new UserRepository();