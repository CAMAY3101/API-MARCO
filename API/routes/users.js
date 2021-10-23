const express = require('express')
const router = express.Router();

const UsersController = require('../controllers/users')

router.post('/addUser', UsersController.addUser);
router.post('/login', UsersController.login);
router.get('/getUser/:correo', UsersController.getUser);

module.exports = router;