import mongoose from 'mongoose'
import consola from 'consola'

mongoose.connect('mongodb+srv://admin:admin123@cluster0.pirsh.mongodb.net/Creative?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(db => {
    consola.success({ message: 'MongoDB connected', badge: false})
}).catch(error => console.error({ message: error, badge: false}))

