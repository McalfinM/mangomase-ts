import UserRepository from '../repositories/user'


class AuthService{

    static register = async (name: string, email: string, password: string) =>{
        const user = UserRepository.create(name, email, password)

        return user
    }
}

export default AuthService