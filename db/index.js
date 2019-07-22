const mongoose = require('mongoose')
const config = require('config')
const mongoUrl = config.get('mongoURI')

const connectDB = async () => {
    try {
        await mongoose.connect(mongoUrl, {
            useNewUrlParser: true
        })
        console.log('Connected to DB')
    } catch (err) {
        console.error(err.message)
        process.exit(1);
    }
}

module.exports = connectDB