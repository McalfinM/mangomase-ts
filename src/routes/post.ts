import { Router, Request, Response } from 'express'
import BaseRoutes from './baseRoutes'
import postController from '../controllers/post'
import { auth } from '../middleware/authMiddleware'
import multer from 'multer'
import { v4 as uuidv4 } from 'uuid'
import { BadRequest } from '@tsed/exceptions'
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(file, 'ini file')
        cb(null, 'images/posts')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + '-' + uuidv4() + '.jpg')

    }
})
const fileFilter = (req: any, file: any, cb: any) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true)
    } else {
        cb(new BadRequest('Only .jpeg or .png files are accepted'), false);
    }
}
class postRoutes extends BaseRoutes {
    public routes(): void {
        this.router.get('/user-posts', auth, postController.findByUserLogin)
        this.router.get('/', postController.findAll)
        this.router.delete('/:uuid', auth, postController.delete)
        this.router.post('/', auth, multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'), postController.create)
        this.router.patch('/:uuid', postController.update)
        this.router.get('/:uuid', postController.findOne)
        this.router.get('/detail/:uuid', auth, postController.findOneForEdit)


    }
}

export default new postRoutes().router