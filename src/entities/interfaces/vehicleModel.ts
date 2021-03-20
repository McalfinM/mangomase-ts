export interface IVehicleModelEntity {
    id?: string;
    uuid: string;
    vehicle_brand_uuid: string;
    vehicle_sub_type_uuid: string;
    vehicle_brand?: { [k: string]: any } | null | any;
    name: string;
    cargo_size_length: number;
    cargo_size_width: number;
    cargo_size_height: number;
    cargo_size_dimmension: number;
    weight_empty: number;
    weight_maximum: number;
    engine_model: string;
    year: string;
    cylinder_capacity: string;
    maximum_speed: string;
}
