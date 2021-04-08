import UserRepository from '../repositories/user'


class AuthService {

    static register = async (name: string, email: string, password: string) => {
        const findUser = await UserRepository.findByEmail(email)
        if (findUser) throw new Error('email already taken')
        const user = UserRepository.create(name, email, password)

        return user
    }
}

export default AuthService