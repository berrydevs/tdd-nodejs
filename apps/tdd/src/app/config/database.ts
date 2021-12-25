import { Sequelize } from 'sequelize';
const config = require('config');

const db = config.get('database');

const sequelize = new Sequelize(db.database, db.username, db.password, {
  dialect: db.dialect,
  storage: db.storage,
  logging: db.logging
});

module.exports = sequelize;
