const mongoose = require('mongoose')

const Users = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    name:String,
    passwordHash:String,
})

Users.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
})

module.exports = mongoose.model('User',Users)