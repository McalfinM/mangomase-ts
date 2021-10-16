import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://calfin08:codered2132@betulin.jvruk.mongodb.net/mangomase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => {
    console.log('connect')
}).catch(error => console.log(error))

