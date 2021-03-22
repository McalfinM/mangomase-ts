import BaseEntity from "./baseEntity";
import { IPartner } from './interfaces/partner'

class PartnerEntity extends BaseEntity {
    protected id?: string | null
    protected uuid?: string | null;
    protected user_uuid?: string | null;
    protected name?: string | null;
    protected desription?: string | null;
    protected hours_close_open?: string | null;
    protected image?: string | null;
    protected category?: string | null;
    protected created_at?: Date | null;
    protected updated_at?: Date | null;
    protected deleted_at?: Date | null;
    constructor(params: IPartner) {
        super();
        this.id = params.id;
        this.uuid = params.uuid;
        this.user_uuid = params.user_uuid;
        this.name = params.name;
        this.desription = params.desription;
        this.hours_close_open = params.hours_close_open;
        this.image = params.image;
        this.category = params.category;
        this.created_at = params.created_at;
        this.updated_at = params.updated_at;
        this.deleted_at = params.deleted_at;
    }

    get getId(): string | null {
        return this?.id ?? null;
    }

    set setId(id: string) {
        this.id = id;
    }

    get getUuid(): string | null | undefined {
        return this.uuid;
    }

    set setUuid(uuid: string) {
        this.uuid = uuid;
    }

    get getUserUuid(): string | null | undefined {
        return this.user_uuid;
    }

    set setUserUuid(user_uuid: string) {
        this.user_uuid = user_uuid;
    }

    get getName(): string | null | undefined {
        return this.name
    }

    set setName(name: string) {
        this.name = name
    }

    get getDesription(): string | null | undefined {
        return this.desription
    }

    set setDesription(desription: string) {
        this.desription = desription
    }

    get getHoursCloseOpen(): string | null | undefined {
        return this.hours_close_open
    }

    set setHoursCloseOpen(hours_close_open: string) {
        this.hours_close_open = hours_close_open
    }

    get getImage(): string | null | undefined {
        return this.image
    }

    set setImage(image: string) {
        this.image = image
    }

    get getCategory(): string | null | undefined {
        return this.category
    }

    set setCategory(category: string) {
        this.category = category
    }

    get getDeletedAt(): Date | null | undefined {
        return this.deleted_at;
    }

    set setDeletedAt(deleted_at: Date) {
        this.deleted_at = deleted_at;
    }

    get getCreatedAt(): Date | null | undefined {
        return this.created_at;
    }

    set setCreatedAt(created_at: Date) {
        this.created_at = created_at;
    }

    get getUpdatedAt(): Date | null | undefined {
        return this.updated_at;
    }

    set setUpdatedAt(updated_at: Date | null) {
        this.updated_at = updated_at;
    }

    toJson(): object {
        return {
            uuid: this.uuid,
            user_uuid: this.user_uuid,
            name: this.name,
            desription: this.desription,
            hours_close_open: this.hours_close_open,
            image: this.image,
            category: this.category,
            created_at: this.created_at,
            updated_at: this.updated_at,
            deleted_at: this.deleted_at
        };
    }
}

export default PartnerEntity;
