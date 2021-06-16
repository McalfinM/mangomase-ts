import BaseRoutes from './baseRoutes'
import postController from '../controllers/post'
import { auth } from '../middleware/authMiddleware'
import validator from '../middleware/validator/postCreate'
class postRoutes extends BaseRoutes {
    public routes(): void {
        this.router.get('/user-posts', auth, postController.findByUserLogin)
        this.router.get('/', postController.findAll)
        this.router.delete('/:uuid', auth, postController.delete)
        this.router.post('/', auth, validator, postController.create)
        this.router.put('/:uuid', auth, validator, postController.update)
        this.router.get('/:uuid', postController.findOne)
        this.router.get('/detail/:uuid', auth, postController.findOneForEdit)


    }
}

export default new postRoutes().router