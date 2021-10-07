const express = require('express')
const User = require('../models/User')
const Blog = require('../models/Blog')
const router = express.Router()
const bcrypt = require('bcrypt')

const addUser = router.post('/users',async(req,res,next)=>{
    const body = req.body

    const result = await User.findOne({username:body.username})

    console.log(result)
    if(body.password.length < 3){
        console.log("The password must contain at least 3 characters")
        res.status(404).end()
    }
    else if(body.username.length < 3){
        console.log("The usernaame must contain at least 3 characters")
        res.status(404).end()
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password,saltRounds)

    const newUser = new User({
        username:body.username,
        name:body.name,
        passwordHash
    })
    
    await newUser.save()
    res.json(newUser)
})

const getAllUsers = router.get('/users',async(req,res)=>{
    const allUsers = await User.find({}).populate('blogs',{title:1,url:1,likes:1})

    res.json(allUsers)
})

module.exports = {
    addUser,
    getAllUsers
}