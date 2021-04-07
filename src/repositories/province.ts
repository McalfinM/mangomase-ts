
import ProvinceEntity from '../entities/province';
import Province from '../models/Province';

class ProvinceRepository {

    async create(provinceEntity: ProvinceEntity): Promise<ProvinceEntity> {
        const post: { [k: string]: any } = await Province.create({
            uuid: provinceEntity.getUuid,
            code: provinceEntity.getCode,
            name: provinceEntity.getName
        })

        return provinceEntity
    }

    async findOne(uuid: string): Promise<ProvinceEntity | null> {
        const partner = await Province.findOne({
            uuid: uuid,
        })

        return partner ? new ProvinceEntity({
            uuid: partner.uuid ?? '',
            code: partner.code ?? '',
            name: partner.name ?? ''
        }) : null

    }

    async update(provinceEntity: ProvinceEntity, uuid: string): Promise<ProvinceEntity> {
        const partner = await Province.updateOne({ uuid: uuid, },
            {
                code: provinceEntity.getCode,
                name: provinceEntity.getName
            }
        )

        return partner
    }

    async delete(uuid: string): Promise<object> {
        const partner = await Province.updateOne({ uuid: uuid },
            {
                deleted_at: new Date()
            })

        return partner
    }

    async index(query: { [k: string]: any }): Promise<object> {

        const { page, limit, sort, ...rest } = query;

        // filter
        const queryVal: { [k: string]: any } = {}
        for (const key in rest) {
            if (Object.prototype.hasOwnProperty.call(rest, key)) {
                const element: any = rest[key];
                if (typeof element === 'object') {
                    for (const k in element) {
                        if (Object.prototype.hasOwnProperty.call(element, k)) {
                            queryVal[key] = { ['$' + k]: element[k] };
                        }
                    }
                }
                else {
                    queryVal[key] = new RegExp(rest[key], 'i');
                }
            }
        }

        // sort
        const sortVal: { [k: string]: any } = {}
        const sortArr = (sort as string)?.split(',');
        sortArr?.map(s => {
            const splitted = (s as string)?.split('.');
            sortVal[splitted[0]] = splitted[1].toUpperCase() == 'ASC' ? 1 : -1;
        })

        let options: object = {} as any;
        // paginate
        if (limit) {
            // @ts-ignore
            options.limit = +limit;
        }

        if (page && limit) {
            if (+page > 1) {
                // @ts-ignore
                options.skip = (page - 1) * +limit;
            }
        }

        // @ts-ignore
        options.sort = sortVal;

        return Province.find(

            { ...queryVal },
            {},
            options,
        )
            .then(result => {
                return result.map(data => {
                    return new ProvinceEntity({
                        uuid: data.uuid ?? '',
                        code: data.code ?? '',
                        name: data.name ?? ''
                    });
                })
            })
            .catch(err => {
                return err;
            })
    }
}

export default new ProvinceRepository();