const express = require('express')
const routes = express.Router()
const newUserTemplateCopy = require('../models/users')
const newRamenTemplateCopy = require('../models/ramens')

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

routes.post('/ramen/new', (request, response) =>{
    const newRamen = new newRamenTemplateCopy({
        title:request.body.title,
        description:request.body.descriptionn,
        ingredients:request.body.ingredients
    })
    newRamen.save()
    .then(data =>{
        response.json(data)
        console.log("Send request successful")
    })
    .catch(error => {
        response.json(error)
        console.log("Send request failed")
    }) 
})

routes.get('/ramen/:id', (request, response) => {

})

routes.get('/ramen', (request, response) => {

})

routes.patch('/ramen/:id', (req, res) => {

})

routes.delete('/ramen/:id', (req, res) => {

})



module.exports = routes