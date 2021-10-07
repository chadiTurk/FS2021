const express = require('express')
const Blog = require('../models/Blog')
const User = require('../models/User')
const router = express.Router()


const getBlogs = router.get('/blogs', async (req,res)=>{
    const blogs = await  Blog.find({}).populate('user',{username:1,name:1})
    res.json(blogs)
})

const getOneBlog = router.get('/blogs/:id',async(req,res)=>{
   const response = await Blog.findById(req.params.id)
   res.send(response.toJSON())
})

const addBlog = router.post('/blogs', async (req,res)=>{

    const body = req.body

    const user = await User.findById(body.userId)
   
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
        
    // newBlog.save()
    // .then(savedBlog =>{
    //     console.log('saved blog',savedBlog)
    //     console.log('user',user)
    //     user.blogs = user.blogs.concat(savedBlog._id)
    //     user.save()
    //     .then(res =>console.log(res))
    //     .catch(err =>console.log(err))
    //     res.json(savedBlog)
    // })
    // .catch(err => console.log(err))

    
})

const deleteBlog = router.delete('/blogs/:id',(req,res)=>{
    Blog.findByIdAndRemove(req.params.id)
    .then(res.status(204).end())
    .catch(res.status(404).end())
})

const updateBlog = router.put('/blogs/:id', async(req,res)=>{

    const update = await Blog.findByIdAndUpdate(req.params.id,{$inc : {'likes' : 1}})

    res.send(update)
})



module.exports = {
    getBlogs,
    addBlog,
    getOneBlog,
    deleteBlog,
    updateBlog
}