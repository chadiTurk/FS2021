const express = require('express')
const User = require('../models/User')
const router = express.Router()
const bcrypt = require('bcrypt')

const addUser = router.post('/users',async(req,res)=>{
    const body = req.body

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
    const allUsers = await User.find({})

    res.json(allUsers)
})

module.exports = {
    addUser,
    getAllUsers
}