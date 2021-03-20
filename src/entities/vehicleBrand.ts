import BaseEntity from "./baseEntity";
import { IVehicleBrandEntity } from './interfaces/vehicleBrand'

class VehicleBrandEntity extends BaseEntity {
    protected id?: string;
    protected uuid: string;
    protected vehicle_type_uuid: string;
    protected name: string;

    constructor(params: IVehicleBrandEntity) {
        super();
        this.id = params.id;
        this.uuid = params.uuid;
        this.vehicle_type_uuid = params.vehicle_type_uuid
        this.name = params.name;
    }

    get getId(): string | null {
        return this?.id ?? null;
    }

    set setId(id: string) {
        this.id = id;
    }

    get getUuid(): string {
        return this.uuid;
    }

    set setUuid(uuid: string) {
        this.uuid = uuid;
    }

    get getVehicleTypeUuid(): string {
        return this.vehicle_type_uuid;
    }

    set setVehicleTypeUuid(vehicle_type_uuid: string) {
        this.vehicle_type_uuid = vehicle_type_uuid;
    }

    get getName(): string {
        return this.name;
    }

    set setName(name: string) {
        this.name = name;
    }

    toJson(): object {
        return {
            id: this.id,
            uuid: this.uuid,
            vehicle_type_uuid: this.vehicle_type_uuid,
            name: this.name
        };
    }
}

export default VehicleBrandEntity;
