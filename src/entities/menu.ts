
import BaseEntity from "./baseEntity";
import { IEmbed, IMenuEntity } from "./interfaces/menu";

class MenuEntity extends BaseEntity {
    protected _uuid: string
    protected _name: string
    protected _slug: string
    protected _description: string
    protected _price: number
    protected _image: string
    protected _cloudinary_id: string
    protected _category: IEmbed
    protected _created_at: Date | null
    protected _updated_at: Date | null
    protected _deleted_at: Date | null
    constructor(params: IMenuEntity) {
        super();
        this._uuid = params.uuid
        this._name = params.name
        this._slug = params.slug
        this._description = params.description
        this._price = params.price
        this._image = params.image
        this._cloudinary_id = params.cloudinary_id
        this._category = params.category
        this._created_at = params.created_at
        this._updated_at = params.updated_at
        this._deleted_at = params.deleted_at
    }

    get uuid(): string {
        return this._uuid
    }
    set uuid(uuid: string) {
        this._uuid = uuid
    }
    get name(): string {
        return this._name
    }
    set name(name: string) {
        this._name = name
    }
    get slug(): string {
        return this._slug
    }
    set slug(slug: string) {
        this._slug = slug
    }
    get description(): string {
        return this._description
    }
    set description(description: string) {
        this._description = description
    }
    get cloudinary_id(): string {
        return this._cloudinary_id
    }
    set cloudinary_id(cloudinary_id: string) {
        this._cloudinary_id = cloudinary_id
    }
    get price(): number {
        return this._price
    }
    set price(price: number) {
        this._price = price
    }

    get image(): string {
        return this._image
    }
    set image(image: string) {
        this._image = image
    }
    get category(): IEmbed {
        return this._category
    }
    set category(category: IEmbed) {
        this._category = category
    }

    get created_at(): Date | null {
        return this._created_at
    }
    set created_at(created_at: Date | null) {
        this._created_at = created_at
    }
    get updated_at(): Date | null {
        return this._updated_at
    }
    set updated_at(updated_at: Date | null) {
        this._updated_at = updated_at
    }
    get deleted_at(): Date | null {
        return this._deleted_at
    }
    set deleted_at(deleted_at: Date | null) {
        this._deleted_at = deleted_at
    }
    toJson(): object {
        return {
            uuid: this.uuid,
            name: this.name,
            slug: this.slug,
            description: this.description,
            price: this.price,
            image: this.image,
            cloudinary_id: this.cloudinary_id,
            created_at: this.created_at,
            updated_at: this.updated_at,
            deleted_at: this.deleted_at,
        };
    }

    toListData(): {} {
        return {
            uuid: this.uuid,
            name: this.name,
            slug: this.slug,
            price: this.price,
            image: this.image,
        };
    }

    toDetailData(): {} {
        return {
            uuid: this.uuid,
            name: this.name,
            description: this.description,
            price: this.price,
            image: this.image,
            created_at: this.created_at,
        };
    }
}

export default MenuEntity;
