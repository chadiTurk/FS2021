const express = require('express')
const User = require('../models/User')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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

const userLogin = router.post('/user/login',async(req,res)=>{
    const body = req.body

    const user = await User.findOne({username:body.username})
    const passwordCorrect = user === null ? false : await bcrypt.compare(body.password,user.passwordHash)

    if(!(user && passwordCorrect)){
        return res.status(401).json({
            error: 'invalid username or password'
          })
    }

    const userForToken = {
        username: user.username,
        id: user._id
    }

    const token = jwt.sign(userForToken,process.env.SECRET)

    res
    .status(200)
    .send({token,username:user.username,name:user.name,id:user._id})
    

})

module.exports = {
    addUser,
    getAllUsers,
    userLogin
}