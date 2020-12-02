const joi = require('joi');

const validator = require('express-joi-validation').createValidator({});

exports.loginSchema = validator.body(joi.object().keys({
  email: joi.string().email().required(),
  password: joi.string().required()
}));


