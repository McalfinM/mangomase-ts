import { BadRequest } from '@tsed/exceptions'
import CityEntity from '../entities/cityEntity'
import CityRepository from '../repositories/city'

class CityService {
    async findOne(uuid: string): Promise<CityEntity> {

        const province = await CityRepository.findOne(uuid)
        if (!province) throw new BadRequest('City Not Found')
        return province
    }

    async findOneChange(uuid: string): Promise<CityEntity | null> {

        const province = await CityRepository.findOne(uuid)
        return province
    }

    async findAll(query: { [k: string]: any }): Promise<CityEntity[] | any> {
        const province = await CityRepository.index(query)
        if (!province) throw new BadRequest('Province Not Found')
        return province
    }
}

export default new CityService();