const express = require('express')
const Blog = require('../models/Blog')
const router = express.Router()


router.get('/',(req,res)=>{
    res.redirect('/blogs')
})

const getBlogs = router.get('/blogs',(req,res)=>{
   Blog.find({})
   .then(blogs => res.json(blogs))
   .catch(err => res.status(404).send(err))
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



module.exports = {
    getBlogs,
    addBlog,
    deleteBlog
}