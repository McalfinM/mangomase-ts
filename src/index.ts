import express, { Application, json, urlencoded } from 'express'
import compression from 'compression'
import dotenv from 'dotenv'
import cors from 'cors'
import './database'
import authRoutes from './routes/authRoutes'
import userRoutes from './routes/userRoutes'
import menuRoutes from './routes/menu'
import categoryRoutes from './routes/category'
import orderRoutes from './routes/order'
import couponRoutes from './routes/coupon'
import paymentRoutes from './routes/payment'
import err from './middleware/errorMiddleware'
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
        this.app.use('/api/v1/menus', menuRoutes)
        this.app.use('/api/v1/categories', categoryRoutes)
        this.app.use('/api/v1/orders', orderRoutes)
        this.app.use('/api/v1/coupons', couponRoutes)
        this.app.use('/api/v1/payments', paymentRoutes)
    }

}
const port = process.env.PORT || 3000
const app = new App().app

app.listen(process.env.PORT || 3000);
console.log(port)
