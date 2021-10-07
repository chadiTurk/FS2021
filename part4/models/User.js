const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Users = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        minLength:3,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    passwordHash:{
        type:String,
        required:true,
        minLength:3
    }
})

Users.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
})

Users.plugin(uniqueValidator)

module.exports = mongoose.model('User',Users)