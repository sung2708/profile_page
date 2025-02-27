var express = require('express');
var router = express.Router();
var userController = require('../controllers/users.controller')

router.post('/register', userController.register);

module.exports = router;
