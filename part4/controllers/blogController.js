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

module.exports = {
    getBlogs,
    addBlog
}