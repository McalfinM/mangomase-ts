"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseEntity_1 = __importDefault(require("./baseEntity"));
class VehicleBrandEntity extends baseEntity_1.default {
    constructor(params) {
        super();
        this.id = params.id;
        this.uuid = params.uuid;
        this.vehicle_type_uuid = params.vehicle_type_uuid;
        this.name = params.name;
    }
    get getId() {
        var _a;
        return (_a = this === null || this === void 0 ? void 0 : this.id) !== null && _a !== void 0 ? _a : null;
    }
    set setId(id) {
        this.id = id;
    }
    get getUuid() {
        return this.uuid;
    }
    set setUuid(uuid) {
        this.uuid = uuid;
    }
    get getVehicleTypeUuid() {
        return this.vehicle_type_uuid;
    }
    set setVehicleTypeUuid(vehicle_type_uuid) {
        this.vehicle_type_uuid = vehicle_type_uuid;
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
    toJson() {
        return {
            id: this.id,
            uuid: this.uuid,
            vehicle_type_uuid: this.vehicle_type_uuid,
            name: this.name
        };
    }
}
exports.default = VehicleBrandEntity;
