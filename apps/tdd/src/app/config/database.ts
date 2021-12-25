import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('hoaxify', 'db-user', 'pass', {
  dialect: 'sqlite',
  storage: './database.sqlite',
});

module.exports = sequelize;
