const { Sequelize } = require('sequelize');
require('dotenv').config();

// Ініціалізація підключення до бази даних PostgreSQL через Sequelize
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',  
  logging: false,       
});

module.exports = sequelize; 
