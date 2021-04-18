import CityEntity from "../entities/cityEntity";
import City from "../models/City";

class CityRepository {

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

        return City.find(

            { ...queryVal },
            {},
            options,
        )
            .then(result => {
                return result.map(data => {
                    return new CityEntity({
                        uuid: data.uuid ?? '',
                        code: data.code ?? '',
                        province_code: data.province_code ?? '',
                        province_uuid: data.province_uuid ?? '',
                        name: data.name ?? ''
                    });
                })
            })
            .catch(err => {
                return err;
            })
    }


    async findOne(uuid: string): Promise<CityEntity | null> {
        const partner = await City.findOne({
            uuid: uuid,
        })

        return partner ? new CityEntity({
            uuid: partner.uuid ?? '',
            code: partner.code ?? '',
            province_code: null,
            province_uuid: partner.province_uuid ?? '',
            name: partner.name ?? ''
        }) : null

    }
}

export default new CityRepository();