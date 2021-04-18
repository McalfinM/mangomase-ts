import BaseEntity from "./baseEntity";
import { ICityEntity } from './interfaces/city'

class CityEntity extends BaseEntity {
    protected id?: string | null
    protected uuid: string | null
    protected code: string | null
    protected province_code: string | null;
    protected province_uuid: string | null;
    protected name: string | null

    constructor(params: ICityEntity) {
        super();
        this.id = params.id;
        this.uuid = params.uuid;
        this.code = params.code;
        this.province_code = params.province_code;
        this.province_uuid = params.province_uuid
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

    get getProvinceCode(): string | null {
        return this.province_code
    }

    set setProvinceCode(province_code: string | null) {
        this.province_code = province_code
    }

    get getProvinceUuid(): string | null {
        return this.province_uuid
    }

    set setProvinceUuid(province_uuid: string | null) {
        this.province_uuid = province_uuid
    }


    set setUuid(uuid: string) {
        this.uuid = uuid;
    }

    get getName(): string | null {
        return this.name;
    }

    set setName(name: string) {
        this.name = name;
    }

    get getCode(): string | null {
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

export default CityEntity;
