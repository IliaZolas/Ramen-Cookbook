const express = require('express')
const app = express()
const PORT = 4000
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')
const multer  = require('multer')
const AWS = require('aws-sdk')
const fs = require('fs')

dotenv.config() 

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("DB connected"))


// configuring the DiscStorage engine.
const storage = multer.diskStorage({
        destination : 'uploads/',
        filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});
const upload = multer({ storage: storage });

// config S3
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_BUCKET_REGION,
});



app.use(express.json())
app.use(cors())
app.use('/', routesUrls)
app.listen(PORT, () => console.log(`server is running on ${PORT}`))