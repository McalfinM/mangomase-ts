
import PartnerEntity from '../entities/partner';
import Partner from '../models/partner';

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

    async update(postEntity: PartnerEntity, uuid: string, comment: string): Promise<PartnerEntity> {
        const post = await Partner.updateOne({ "comment.uuid": uuid, },
            {
                $set: {
                    "comment.$.comment": comment,
                    "comment.$.updated_at": new Date
                }
            }
        )

        return post
    }

    async delete(uuid: string): Promise<object> {
        const post = await Partner.updateOne({ "comment.uuid": uuid },
            {
                $set: {
                    "comment.$.deleted_at": new Date
                }
            })

        return post
    }
}

export default new PartnerRepository();