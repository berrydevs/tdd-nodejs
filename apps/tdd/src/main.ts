/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';

const sequelize = require('../src/app/config/database');
const UserRoutes = require('./app/user-routes')

sequelize.sync();

const app = express();
console.log("-> process.env.NODE_ENV", process.env.NODE_ENV);

app.use(express.json());
app.use(UserRoutes)

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to tdd!' });
});



const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

module.exports = app;
