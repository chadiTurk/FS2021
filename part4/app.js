const express = require('express')
const app = express()
const cors = require('cors')
require('express-async-errors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const routerBlog = require('./routes/routerBlog')
const routerUser = require('./routes/routerUser')
const mongoose = require('mongoose')
const config = require('./utils/config')


mongoose.connect(config.MONGODB_URI)
.then(()=>{
    console.log('connected to MONGODB')
})
.catch(err =>{
    console.log(err)
})


app.use(routerBlog)
app.use(routerUser)

module.exports = app
