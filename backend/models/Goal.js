const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Update the path as per your project structure

const Goal = sequelize.define(
  'Goal',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    target_value: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    current_value: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    progress: {
      type: DataTypes.FLOAT, // Progress can be a decimal percentage
      defaultValue: 0.0,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true, // Optional field
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true, // Optional field
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'goals', // Ensures it matches the database table name
    timestamps: true, // Enables Sequelize to manage created_at and updated_at
    underscored: true, // Maps camelCase to snake_case in the DB
  }
);

module.exports = Goal;
