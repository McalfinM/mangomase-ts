import ProvinceRepository from "../repositories/province"
import { v4 as uuidv4 } from 'uuid'
import { BadRequest, NotFound } from "@tsed/exceptions";
import ProvinceEntity from "../entities/province";

class ProvinceService {
    async findOne(uuid: string): Promise<ProvinceEntity> {

        const province = await ProvinceRepository.findOne(uuid)
        if (!province) throw new BadRequest('Province Not Found')
        return province
    }

    async findOneChange(uuid: string): Promise<ProvinceEntity | null> {

        const province = await ProvinceRepository.findOne(uuid)
        return province
    }

    async findAll(query: { [k: string]: any }): Promise<ProvinceEntity[] | any> {
        const province = await ProvinceRepository.index(query)
        if (!province) throw new BadRequest('Province Not Found')
        return province
    }
}

export default new ProvinceService();