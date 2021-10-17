import { filter } from 'compression'
const multer = require('multer')
import path from 'path'
import { ErrorUnprocessableEntity } from './errors';

export default multer({
    storage: multer.diskStorage({}),
    fileFilter: (req: any, file: any, cb: any) => {
        let ext = path.extname(file.originalname);
        if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
            cb(new ErrorUnprocessableEntity('File type not supported', '@Multer Helper'))
            return;
        }
        cb(null, true)
    }
})

