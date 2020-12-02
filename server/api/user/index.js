var express = require('express');
var router = express.Router();

var userCtrl = require('./controller');
var validators = require('./validators');

router.post('/auth', validators.loginSchema, userCtrl.login);

module.exports = router;
