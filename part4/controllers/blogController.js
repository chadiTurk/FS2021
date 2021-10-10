const express = require('express')
const Blog = require('../models/Blog')
const User = require('../models/User')
const router = express.Router()
const jwt = require('jsonwebtoken')

const getBlogs = router.get('/blogs/all', async (req,res)=>{
    const blogs = await  Blog.find({}).populate('user',{username:1,name:1})
    res.json(blogs)
})

const getOneBlog = router.get('/blogs/:id',async(req,res)=>{
   const response = await Blog.findById(req.params.id)
   res.send(response.toJSON())
})

const getBlogsUser = router.get('/blogs/user/:username', async (req,res)=>{
    let blogs = await Blog.find({}).populate('user',{username:1,name:1})

    blogs = blogs.filter(blog => blog.user.username === req.params.username)
    res.json(blogs)
})


const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      return authorization.substring(7)
    }
    return null
  }

const addBlog = router.post('/blogs', async (req,res)=>{

    const body = req.body   

    const token = getTokenFrom(req)

    const decodedToken = jwt.verify(token,process.env.SECRET)
    if (!token || !decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
    }
      const user = await User.findById(decodedToken. id)

      console.log('user',user)
   
    const newBlog = new Blog({
        title:body.title,
        url:body.url,
        likes:body.likes,
        user:user._id
    })

    const savedBlog = await newBlog.save()

    user.blogs = user.blogs.concat(savedBlog._id)

    await user.save()

    res.json(savedBlog)
    
})

const deleteBlog = router.delete('/blogs/:id', async (req,res)=>{
    
    const response = await Blog.findByIdAndRemove(req.params.id)
    res.send(response)
})

const updateBlog = router.put('/blogs/:id', async(req,res)=>{
    console.log('executed here bruh')
    const update = await Blog.findByIdAndUpdate(req.params.id,{$inc : {'likes' : 1}})

    res.send(update)
})



module.exports = {
    getBlogs,
    addBlog,
    getOneBlog,
    deleteBlog,
    updateBlog,
    getBlogsUser
}