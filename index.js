const express = require('express')
const connectDB = require('./db')

require('dotenv').config()
const app = express()

// connect to database
connectDB()

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

// Define Routes
app.use('/api/v1', require('./route'))
app.use('/api/v1/url', require('./route/url'))

const PORT = 5000;

app.listen(PORT, () => console.log(`Running on port ${PORT}`))