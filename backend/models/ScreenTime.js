const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');  // Ensure your db configuration is here

const ScreenTime = sequelize.define('ScreenTime', {
  screen_time_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  time_spent: {
    type: DataTypes.INTEGER,  // In minutes or seconds
    allowNull: false,
  },
  app_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = ScreenTime;
