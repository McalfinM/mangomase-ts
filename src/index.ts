import express, { Application } from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import dotenv from 'dotenv'
import cors from 'cors'
import './database'
import authRoutes from './routes/authRoutes'
import userRoutes from './routes/userRoutes'
import postRoutes from './routes/post'
import commentRoutes from './routes/comment'
import err from './middleware/errorMiddleware'
import multer from 'multer'
import { BadRequest } from '@tsed/exceptions'
import { v4 as uuidv4 } from 'uuid'
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
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
class App {

    public app: Application;

    constructor() {
        this.app = express()
        this.plugins()
        this.routes()
        this.errorHandling()
    }

    protected plugins() {
        this.app.use(bodyParser.json())
        this.app.use(compression())
        this.app.use(cors())
        this.app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'))
    }

    protected errorHandling() {
        this.app.use(err)
    }

    protected routes(): void {
        this.app.use('/api/v1/auth', authRoutes)
        this.app.use('/api/v1/users', userRoutes)
        this.app.use('/api/v1/posts', postRoutes)
        this.app.use('/api/v1/comments', commentRoutes)
    }

}
const port = process.env.PORT || 3005
const app = new App().app
app.listen(port, () => {
    console.log(`Server running on localhost:${port}`)
})