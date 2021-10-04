const mongoose = require('mongoose')

const Blogs = mongoose.Schema({
    title:String,
    author:String,
    url:String,
    likes:Number
})

module.exports = mongoose.model('Blogs',Blogs)