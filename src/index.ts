import express, { Application } from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import dotenv from 'dotenv'
import cors from 'cors'
import  './database'
import authRoutes from './routes/authRoutes'
import userRoutes from './routes/userRoutes'
import err from './middleware/errorMiddleware'
import consola from 'consola'

class App{

    public app:Application;

    constructor()
    {
        this.app = express()
        this.plugins()
        this.routes()
        this.errorHandling()
    }

    protected plugins()
    {
        this.app.use(bodyParser.json())
        this.app.use(compression())
        this.app.use(cors())
    }

    protected errorHandling()
    {
        this.app.use(err)
    }

    protected routes():void
    {
        this.app.use('/api/v1/auth', authRoutes)
        this.app.use('/api/v1/users', userRoutes)
    }

}
    const port = process.env.PORT || 3004
    const app = new App().app
    app.listen(port,()=>{
        consola.success({ message: `Server running on localhost:${port}`, badge: false })
    })