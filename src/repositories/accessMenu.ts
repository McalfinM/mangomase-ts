import express from 'express'
import { v4 as uuid } from 'uuid'
import AccessMenu from '../models/AccessMenu'
import Authentication from '../utils/Authentication'

class AccessMenuRepository{

    static find = async () => {
        const accessMenu = await AccessMenu.find()
                            .where('is_verified').ne(null)
                            .select('-_id -uuid -password -__v')

        return accessMenu
    }

    static findOne = async (uuid: string, url: string) => {
        const accessMenu = await AccessMenu.findOne({ user_uuid: uuid }).where('access_FE').select('access_FE')
        .then((res: any) => {
            const loop = res.access_FE
            const data = []
            
            for (let i = 0; i < loop.length; i++) {
                if (loop[i] == url) {
                    data.push(loop[i])
                }
            }
            return data
        })
        
        return accessMenu
    }
    
    static create = async (name: string, email: string, password: string) => {

        const hashPassword: string = await Authentication.hash(password)
        const accessMenu = AccessMenu.create({
            uuid: uuid(),
            name: name,
            email: email,
            password: hashPassword,
        })

        return accessMenu
    }

    static update = async () => {
        //
    }

    static delete = () => {
        //
    }
}

export default AccessMenuRepository