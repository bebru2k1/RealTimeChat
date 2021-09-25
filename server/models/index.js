const User = require('./User')
const mongoose = require('mongoose')
let db = {}
db.User = User
db.connect = async () => {
    console.log()
    try {
        await mongoose.connect(`mongodb+srv://Realtime:${process.env.DB_PASSWORD}@cluster0.rgrzf.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
        console.log('Database Success Connect')
    } catch (error) {
        console.log(error)
    }

}


module.exports = db