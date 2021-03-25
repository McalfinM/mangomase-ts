
import PartnerEntity from '../entities/partner';
import Partner from '../models/Partner';

class PartnerRepository {

    async create(partnerEntity: PartnerEntity): Promise<PartnerEntity> {
        console.log(partnerEntity, 'ini console request')
        const post: { [k: string]: any } = await Partner.create({
            uuid: partnerEntity.getUuid,
            user_uuid: partnerEntity.getUserUuid,
            name: partnerEntity.getName,
            desription: partnerEntity.getDesription,
            hours_close_open: partnerEntity.getHoursCloseOpen,
            image: partnerEntity.getImage,
            category: partnerEntity.getCategory,
            deleted_at: partnerEntity.getDeletedAt,
            created_at: partnerEntity.getCreatedAt,
            updated_at: partnerEntity.getUpdatedAt,
        })

        return partnerEntity
    }

    async findOne(uuid: string): Promise<PartnerEntity | null> {
        const partner = await Partner.findOne({
            uuid: uuid,
            $or: [{ deleted_at: null }, { deleted_at: undefined }],
        })

        return partner ? new PartnerEntity({
            uuid: partner?.uuid,
            user_uuid: partner?.user_uuid,
            name: partner?.name,
            desription: partner?.desription,
            hours_close_open: partner?.hours_close_open,
            image: partner?.image,
            category: partner?.category,
            created_at: partner?.created_at,
            updated_at: partner?.updated_at,
            deleted_at: partner?.deleted_at,
        }) : null

    }

    async update(partnerEntity: PartnerEntity, uuid: string): Promise<PartnerEntity> {
        const partner = await Partner.updateOne({ uuid: uuid, },
            {
                uuid: partnerEntity.getUuid,
                user_uuid: partnerEntity.getUserUuid,
                name: partnerEntity.getName,
                desription: partnerEntity.getDesription,
                hours_close_open: partnerEntity.getHoursCloseOpen,
                image: partnerEntity.getImage,
                category: partnerEntity.getCategory,
                updated_at: partnerEntity.getUpdatedAt,
            }
        )

        return partner
    }

    async delete(uuid: string): Promise<object> {
        const partner = await Partner.updateOne({ uuid: uuid },
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

        return Partner.find(

            { ...queryVal },
            { $or: [{ deleted_at: null }, { deleted_at: undefined }] },
            options,
        )
            .then(result => {
                return result.map(data => {
                    return new PartnerEntity({
                        id: data?._id,
                        user_uuid: data?.user_uuid,
                        name: data?.name,
                        desription: data?.desription,
                        hours_close_open: data?.hours_close_open,
                        image: data?.image,
                        category: data?.category,
                        created_at: data?.created_at,
                        updated_at: data?.updated_at,
                        deleted_at: data?.deleted_at,
                    });
                })
            })
            .catch(err => {
                return err;
            })
    }
}

export default new PartnerRepository();