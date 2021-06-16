import express, { Application, json, urlencoded } from 'express'
import compression from 'compression'
import dotenv from 'dotenv'
import cors from 'cors'
import './database'
import authRoutes from './routes/authRoutes'
import userRoutes from './routes/userRoutes'
import postRoutes from './routes/post'
import commentRoutes from './routes/comment'
import partnerRoutes from './routes/partner'
import provinceRoutes from './routes/province'
import cityRoutes from './routes/city'
import clanRoutes from './routes/clan'
import err from './middleware/errorMiddleware'
import multer from 'multer'
import { BadRequest } from '@tsed/exceptions'
// import { v4 as uuidv4 } from 'uuid'
import path from 'path'
dotenv.config()
class App {

    public app: Application;

    constructor() {
        this.app = express()
        this.plugins()
        this.routes()
        this.errorHandling()
    }

    protected plugins() {
        this.app.use(json())
        this.app.use(compression())
        this.app.use(urlencoded({ extended: true }))
        this.app.use(cors())

    }

    protected errorHandling() {
        this.app.use(err)

    }

    protected routes(): void {
        this.app.use('/api/v1/auth', authRoutes)
        this.app.use('/api/v1/users', userRoutes)
        this.app.use('/api/v1/posts', postRoutes)
        this.app.use('/api/v1/comments', commentRoutes)
        this.app.use('/api/v1/partners', partnerRoutes)
        this.app.use('/api/v1/provinces', provinceRoutes)
        this.app.use('/api/v1/cities', cityRoutes)
        this.app.use('/api/v1/clans', clanRoutes)
    }

}
const port = process.env.PORT || 3008
const app = new App().app

app.listen(process.env.PORT || 3005);
