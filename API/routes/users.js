const express = require('express')
const router = express.Router();

const UsersController = require('../controllers/users')

router.post('/addUser', UsersController.addUser)

module.exports = router;