const mongoose = require('mongoose')


const newUserTemplate = new mongoose.Schema ({ 
        fname:{
            type:String,
            required:true,
        },
        lname:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:false
        },
        password:{
            type:String,
            required:false
        },
        date:{
            type:Date,
            default:Date.now
        }
})

module.exports = mongoose.model('usertable', newUserTemplate )