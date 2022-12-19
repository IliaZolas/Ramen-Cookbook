const mongoose = require('mongoose')


const newRamenTemplate = new mongoose.Schema ({ 
        title:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true
        },
        ingredients:{
            type:String,
            required:true
        }
        ,
       id:{
            // type:String,
            type:mongoose.Types.ObjectId,
            required:false
        }
        ,
        // date:{
        //     type:Date,
        //     default:Date.now
        // }
})

module.exports = mongoose.model('ramentable', newRamenTemplate )