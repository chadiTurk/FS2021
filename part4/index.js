const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const routerBlog = require('./routes/routerBlog')
const mongoose = require('mongoose')
const config = require('./utils/config')


mongoose.connect(config.MONGODB_URI)
.then(request =>{
    app.listen(config.PORT,()=>{
        console.log(`Listening to port ${config.PORT}`);
    })
})
.catch(err =>{
    console.log(err)
})


app.use(routerBlog)

