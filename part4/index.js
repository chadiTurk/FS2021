const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const blogRouter = require('./controllers/blogRoutes')
const mongoose = require('mongoose')


mongoose.connect(process.env.MONGODB_URI)
.then(request =>{
    app.listen(process.env.PORT,()=>{
        console.log(`Listening to port ${process.env.PORT}`);
    })
})
.catch(err =>{
    console.log(err)
})




app.use('/',blogRouter.getBlogs)
app.use('/',blogRouter.addBlog)

