"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseRoutes_1 = __importDefault(require("./baseRoutes"));
const province_1 = __importDefault(require("../controllers/province"));
class ProvinceRoutes extends baseRoutes_1.default {
    routes() {
        this.router.get('/', province_1.default.getAll);
        this.router.get('/:uuid', province_1.default.findOne);
    }
}
exports.default = new ProvinceRoutes().router;
