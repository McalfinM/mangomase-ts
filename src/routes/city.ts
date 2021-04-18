import BaseRoutes from './baseRoutes'
import cityController from '../controllers/city'
class CityRoutes extends BaseRoutes {
    public routes(): void {
        this.router.get('/', cityController.getAll)
        this.router.get('/:uuid', cityController.findOne)
    }
}

export default new CityRoutes().router