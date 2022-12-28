const express = require('express')
const routes = express.Router()
const newUserTemplateCopy = require('../models/users')
const newRamenTemplateCopy = require('../models/ramens')
const Ramens = require('../models/ramens')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;

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

routes.post('/app/ramen/add', (req, res) =>{
    const newRamen = new newRamenTemplateCopy({
        // _id: req.body.id,
        title:req.body.title,
        description:req.body.description,
        ingredients:req.body.ingredients
    })
    newRamen.save()
    .then(data =>{
        res.json(data)
        console.log("Send request successful")
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
    Ramens.updateOne({
        id: req.body.id,
        title:req.body.title,
        description:req.body.description,
        ingredients:req.body.ingredients
    })
    .then(res => {
        res.status(200).json({ message: "Update successful!" });
    })
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