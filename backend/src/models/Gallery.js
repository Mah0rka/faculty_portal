const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Gallery = sequelize.define('Gallery', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  image_url: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: true },
});

module.exports = Gallery;