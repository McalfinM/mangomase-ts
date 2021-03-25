import { Router, Request, Response } from 'express'
import BaseRoutes from './baseRoutes'
import partnerController from '../controllers/partner'
import { auth } from '../middleware/authMiddleware'
import validate from '../middleware/validator/partnerValidator'
import multer from 'multer'
import { v4 as uuidv4 } from 'uuid'
import { BadRequest } from '@tsed/exceptions'
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/partners')
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
        this.router.get('/', partnerController.getAll)
        this.router.post('/', multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'), validate, partnerController.create)
        this.router.patch('/:uuid', partnerController.update)
        this.router.get('/:uuid', partnerController.findOne)
        this.router.delete('/:uuid', partnerController.delete)
    }
}

export default new postRoutes().router