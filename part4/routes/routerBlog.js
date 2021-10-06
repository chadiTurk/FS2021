const express = require('express');
const controllerBlog = require('../controllers/blogController')

const router = express.Router();

router.use('/',controllerBlog.getBlogs)
router.use('/',controllerBlog.addBlog)
router.use('/:id',controllerBlog.deleteBlog)
module.exports = router

