const express = require('express')
const routes = express.Router()
const newUserTemplateCopy = require('../models/users')
const newRamenTemplateCopy = require('../models/ramens')
const Ramens = require('../models/ramens')
const AWS = require('aws-sdk')
const upload = require('../middleware/multer-aws')



// Index Routes

routes.get('/', (req, res) => {
    res.send('Hello world');
})

// User Routes
routes.post('/user/new', (request, response) =>{
    const newUser = new newUserTemplateCopy({
        fname:request.body.fname,
        lname:request.body.lname,
        email:request.body.email,
        password:request.body.password
    })
    newUser.save()
    .then(data =>{
        response.json(data)
        console.log("Send request successful")
    })
    .catch(error => {
        response.json(error)
        console.log("Send request failed")
    }) 
})

routes.get('/:id', (request, response) => {

})

routes.patch('/user/:id', (req, res) => {

})

routes.delete('/user/:id', (req, res) => {

})

// Ramen Routes

// S3
// routes.post('/app/ramen/upload', upload.any('images'), (req,res) => {
//     console.log("req.files:", req.files)
//     return res.status(200).send(req.files)
// })

// Cloudinary
routes.post('/app/ramen/upload', (req,res) => {
    
})

// routes.get('/app/ramen/upload/latest', async (req, res) => {
//     const getImage = await Ramens.findOne().sort({ _id: -1 });
//     res.json(getImage.imageUrl);
//   });


routes.post('/app/ramen/add', (req, res) =>{
    const newRamen = new newRamenTemplateCopy({
        title:req.body.title,
        description:req.body.description,
        ingredients:req.body.ingredients,
        imageUrl: req.body.imageUrl
    })
    newRamen.save()
    .then(data =>{
        res.json(data)
        console.log("Send request successful:", data)
    })
    .catch(error => {
        res.json(error)
        console.log("Send request failed", error)
    }) 
})

routes.get('/app/ramen/show/:id', (req, res) => {
        const ramenId = req.params.id
        console.log("GET SINGLE RECORD:", ramenId)

        Ramens.findOne({_id: ramenId})
        .then(data => res.json(data))
        
})

routes.get('/app/ramen', (req, res) => {
    Ramens.find()
    .then(data => res.json(data))
})


routes.put('/app/ramen/update/:id', (req, res) => {
    const ramenId = req.params.id
    console.log(ramenId, "update ramen id route")

    Ramens.updateOne({_id: ramenId},
        {
        title:req.body.title,
        description:req.body.description,
        ingredients:req.body.ingredients
        })
        .then(data => res.json(data))
})

routes.delete('/app/ramen/delete/:id', (req, res) => {
    const ramenId = req.params.id
    console.log(ramenId,":delete route")

    Ramens.deleteOne({_id: ramenId}, function (err, _result) {
        if (err) {
            res.status(400).send(`Error deleting listing with id ${ramenId}!`);
        } else {
            console.log(`${ramenId} document deleted`);
        }
    })
})



module.exports = routes