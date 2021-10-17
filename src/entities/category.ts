
import BaseEntity from "./baseEntity";
import { ICategoryEntity } from "./interfaces/category";

class CategoryEntity extends BaseEntity {
    protected _uuid: string
    protected _name: string

    constructor(params: ICategoryEntity) {
        super();
        this._uuid = params.uuid
        this._name = params.name

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

    toJson(): object {
        return {
            uuid: this._uuid,
            name: this._name,
        };
    }

    toListData(): {} {
        return {
            uuid: this._uuid,
            name: this._name,
        };
    }

    toDetailData(): {} {
        return {
            uuid: this._uuid,
            name: this._name,
        };
    }
}

export default CategoryEntity;
