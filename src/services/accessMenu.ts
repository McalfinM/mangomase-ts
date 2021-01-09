import AccessMenuRepository from '../repositories/accessMenu'

class AccessMenuService{

    static find = async () => {
        const users = await AccessMenuRepository.find()

        return users
    }

    static findOne = async (uuid: string, url: string) => {
        const user = await AccessMenuRepository.findOne(uuid, url)

        return user
    }

    static create = async (name:string,email:string,password:string) => {
        const user = await AccessMenuRepository.create(name,email,password)

        return user
    }

    static update = () => {
        //
    }

    static delete = () => {
        //
    }

}

export default AccessMenuService