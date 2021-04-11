import { BadRequest } from '@tsed/exceptions'
import ClanEntity from '../entities/clan'
import ClanRepository from '../repositories/clan'

class ClanService {
    async findAll(query: { [k: string]: any }): Promise<ClanEntity[] | any> {
        const province = await ClanRepository.index(query)
        if (!province) throw new BadRequest('Province Not Found')
        return province
    }
}

export default new ClanService();