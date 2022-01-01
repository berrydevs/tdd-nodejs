import * as express from 'express';

const userService = require('./user.service');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const validateName = async (req, res, next) => {
  if (req.body.name === null)
    req.validationErrors = {
      name: 'Name cannot be null.',
    };
  next();
};

const validateEmail = async (req, res, next) => {
  if (req.body.email === null)
    req.validationErrors = {
      ...req.validationErrors,
      email: 'Email cannot be null.',
    };
  next();
};


router.post(
  '/api/1.0/users',
  check('name').notEmpty().withMessage('Name cannot be null.'),
  check('email').notEmpty().withMessage('Email cannot be null.'),
  async (req, res) => {
    const errors = validationResult(req);
    const validationErrors = {};
    if (!errors.isEmpty()) {
      errors.array().forEach((field) => (validationErrors[field.param] = field.msg));
      return res
        .status(400)
        .send({  validationErrors} );
    }


    await userService.save(req.body);
    return res.send({ message: 'You are onboard.' });
});

module.exports = router;
