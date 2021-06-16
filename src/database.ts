import mongoose from 'mongoose'

// let url: string | undefined

// if (process.env.NODE_ENV === 'dev') {
//     url = process.env.MONGO_URI_TEST
// } else {
//     url = process.env.MONGO_URI
// }
// 'mongodb+srv://calfin08:codered2132@betulin.jvruk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect('mongodb://localhost:27017/muezaa', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => {
    console.log('connect')
}).catch(error => console.log(error))

