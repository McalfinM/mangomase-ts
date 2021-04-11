import BaseEntity from "./baseEntity";
import { IAnimalType } from './interfaces/clan'

class ClanEntity extends BaseEntity {
    protected id?: string | null
    protected uuid: string
    protected animal_type_uuid: string
    protected name: string

    constructor(params: IAnimalType) {
        super();
        this.id = params.id;
        this.uuid = params.uuid;
        this.animal_type_uuid = params.animal_type_uuid;
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

    get getAnimalTypeUuid(): string {
        return this.animal_type_uuid;
    }

    set getAnimalTypeUuid(animal_type_uuid: string) {
        this.animal_type_uuid = animal_type_uuid;
    }



    toJson(): object {
        return {
            uuid: this.uuid,
            animal_type_uuid: this.animal_type_uuid,
            name: this.name,
        };
    }
}

export default ClanEntity;
