import BaseEntity from "./baseEntity";
import { IProvince } from './interfaces/province'

class ProvinceEntity extends BaseEntity {
    protected id?: string | null
    protected uuid: string
    protected code: string
    protected name: string

    constructor(params: IProvince) {
        super();
        this.id = params.id;
        this.uuid = params.uuid;
        this.code = params.code;
        this.name = params.name
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

    get getName(): string {
        return this.name;
    }

    set setName(name: string) {
        this.name = name;
    }

    get getCode(): string {
        return this.code;
    }

    set setCode(code: string) {
        this.code = code;
    }



    toJson(): object {
        return {
            uuid: this.uuid,
            code: this.code,
            name: this.name,
        };
    }
}

export default ProvinceEntity;
