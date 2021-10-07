const express = require('express')
const Blog = require('../models/Blog')
const router = express.Router()


const getBlogs = router.get('/blogs',(req,res)=>{
   Blog.find({})
   .then(blogs => res.json(blogs))
   .catch(err => res.status(404).send(err))
})

const getOneBlog = router.get('/blogs/:id',async(req,res)=>{
   const response = await Blog.findById(req.params.id)
   res.send(response.toJSON())
})

const addBlog = router.post('/blogs',(req,res)=>{
    const newBlog = new Blog(req.body)
    newBlog.save()
    .then(savedBlog =>res.json(savedBlog))
    .catch(err => console.log(err))
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