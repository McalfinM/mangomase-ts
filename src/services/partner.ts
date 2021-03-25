import PartnerEntity from "../entities/partner";
import PartnerRepository from "../repositories/partner"
import CreatePartnerRequest from "../request/createPartnerRequest";
import UpdatePostRequest from "../request/updatePostRequest"
import { v4 as uuidv4 } from 'uuid'
import slugify from 'slugify'
import { ErrorNotFound } from "../utils/errors";
import { BadRequest } from "@tsed/exceptions";

class PartnerService {

    getAll = async (query: { [k: string]: any }) => {
        const post = await PartnerRepository.index(query)
        if (!post) throw new BadRequest('Post Not Found')
        return post
    }
    async create(request: CreatePartnerRequest, user: { [k: string]: any }, image: any): Promise<PartnerEntity> {

        const postEntity: PartnerEntity = new PartnerEntity({
            uuid: uuidv4(),
            user_uuid: '7gd74-5895-59gf-589njn54-5945j4nj',
            name: request.name,
            description: request.description,
            hours_close_open: request.hours_close_open,
            image: image ?? 'partner.jpg',
            category: request.category,
            created_at: request.created_at ?? new Date(),
            updated_at: request.updated_at ?? null,
            deleted_at: request.deleted_at ?? null,
        })
        const post = await PartnerRepository.create(postEntity)
        return post
    }

    async update(request: CreatePartnerRequest, user: { [k: string]: any }, uuid: string): Promise<PartnerEntity> {
        const partnerEntity: PartnerEntity = new PartnerEntity({
            uuid: uuid,
            user_uuid: '7gd74-5895-59gf-589njn54-5945j4nj',
            name: request.name,
            description: request.description,
            hours_close_open: request.hours_close_open,
            image: request.image,
            category: request.category,
            updated_at: request.updated_at ?? new Date(),
        })
        const post = await PartnerRepository.update(partnerEntity, uuid);
        return partnerEntity
    }

    async findOne(uuid: string): Promise<PartnerEntity> {
        const post: PartnerEntity | null | undefined = await PartnerRepository.findOne(uuid)
        if (!post) throw new BadRequest('Post Not Found')
        return post
    }

    async delete(uuid: string): Promise<object> {
        const post = await PartnerRepository.delete(uuid)
        if (!post) throw new BadRequest('Post Not Found')
        return post
    }
}

export default new PartnerService();