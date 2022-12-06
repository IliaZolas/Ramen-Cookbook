const express = require('express')
const routes = express.Router()
const newUserTemplateCopy = require('../models/users')
const newRamenTemplateCopy = require('../models/ramens')
const Ramens = require('../models/ramens')

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
        id: req.body.id,
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

routes.get('app/ramen/:id', (req, res) => {
    const ramenID = req.params
    console.log(ramenID, "this is from router")

    Ramens.find(ramenID)
    .then(data => res.json(data))
})

routes.get('/app/ramen', (request, response) => {
    Ramens.find()
    .then(data => response.json(data))

})

routes.patch('/ramen/:id', (req, res) => {

})

routes.delete('/app/ramen/delete/:id', (req, res) => {
    const ramenID = req.params
    console.log(ramenID)
  
    Ramens.deleteOne(ramenID, function (err, _result) {
        if (err) {
          res.status(400).send(`Error deleting listing with id ${ramenID.id}!`);
        } else {
          console.log("1 document deleted");
        }
      })
})


module.exports = routes