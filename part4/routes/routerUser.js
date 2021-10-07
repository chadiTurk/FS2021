const express = require('express');
const userController = require('../controllers/userController')

const router = express.Router()

router.use('/',userController.addUser)
router.use('/',userController.getAllUsers)

module.exports = router