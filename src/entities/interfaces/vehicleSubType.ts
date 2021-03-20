export interface IVehicleSubTypeEntity {
    id?: string;
    uuid: string;
    vehicle_type_uuid: string;
    types: { [k: string]: any }[] | null | undefined
    name: string;
}
