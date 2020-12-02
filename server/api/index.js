var router = require('express').Router();

router.use('/', require('./user'));
// router.use('/category', require('./category'));

module.exports =  router;
