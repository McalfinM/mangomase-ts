import BaseRoutes from './baseRoutes'
import provinceController from '../controllers/province'
class ProvinceRoutes extends BaseRoutes {
    public routes(): void {
        this.router.get('/', provinceController.getAll)
        this.router.get('/:uuid', provinceController.findOne)
    }
}

export default new ProvinceRoutes().router