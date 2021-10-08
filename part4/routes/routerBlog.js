const express = require('express');
const controllerBlog = require('../controllers/blogController')

const router = express.Router();

router.use('/',controllerBlog.getBlogs)
router.use('/:id',controllerBlog.getOneBlog)
router.use('/',controllerBlog.addBlog)
router.use('/:id',controllerBlog.deleteBlog)
router.use('/:id',controllerBlog.updateBlog)
router.use('/:username',controllerBlog.getBlogsUser)
module.exports = router

