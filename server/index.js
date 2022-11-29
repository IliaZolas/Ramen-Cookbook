const express = require('express')
const app = express()
const PORT = 4000
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

dotenv.config() 

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("DB connected"))

app.use(express.json())
// app.use(cors())
app.use('/', routesUrls)
app.listen(PORT, () => console.log(`server is running on ${PORT}`))