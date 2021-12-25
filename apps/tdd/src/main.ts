/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
const bcrypt = require('bcrypt');
const User = require('./app/User');

const sequelize = require('../src/app/config/database');

sequelize.sync();

const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to tdd!' });
});

app.post('/api/1.0/users', (req, res) => {
  bcrypt.hash(req.body.password, 13).then((hash) => {
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: hash,
    };
    User.create(user).then(() => {
      return res.send({ message: 'You are onboard.' });
    });
  });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

module.exports = app;
