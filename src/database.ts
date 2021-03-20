import mongoose from 'mongoose'
import consola from 'consola'
import dotenv from 'dotenv'
dotenv.config()

let url: string | undefined

if (process.env.NODE_ENV === 'dev') {
    url = process.env.MONGO_URI_TEST
} else {
    url = process.env.MONGO_URI
}
consola.log(url, 'ini urlny db')
mongoose.connect(url || "", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => {
    consola.success({ message: 'MongoDB connected', badge: false })
}).catch(error => console.error({ message: error, badge: false }))

