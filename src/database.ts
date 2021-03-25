import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

let url: string | undefined

if (process.env.NODE_ENV === 'dev') {
    url = process.env.MONGO_URI_TEST
} else {
    url = process.env.MONGO_URI
}
mongoose.connect(url || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => {
    console.log('connect')
}).catch(error => console.log(error))

