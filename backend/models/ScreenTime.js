const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const ScreenTime = sequelize.define('ScreenTime', {
  // Model attributes
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false, // Ensure that user_id is always provided
  },
  date: {
    type: DataTypes.DATEONLY,  // To store date only (no time)
    allowNull: false,  // Ensure the date is provided
  },
  usage_duration: {
    type: DataTypes.INTEGER,  // Duration in minutes
    allowNull: false,  // Ensure the usage_duration is provided
  },
  screen_category: {
    type: DataTypes.STRING,  // Category like Instagram, Facebook, etc.
    allowNull: false,  // Ensure the screen category is provided
  }
}, {
  tableName: 'screen_times',  // Name of the table in MySQL
  timestamps: false,  // No automatic timestamps (createdAt, updatedAt)
});

module.exports = ScreenTime;
