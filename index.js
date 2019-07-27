const express = require('express')
const connectDB = require('./db')

require('dotenv').config()
const app = express()

// connect to database
connectDB()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// Define Routes
app.use('/', require('./route'))
app.use('/api/v1/url', require('./route/url'))

const PORT = 5000;

app.listen(PORT, () => console.log(`Running on port ${PORT}`))