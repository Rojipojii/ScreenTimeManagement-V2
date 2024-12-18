const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');  // Ensure correct path to sequelize instance

const User = sequelize.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Assuming it's an auto-incrementing ID
      },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
});

module.exports = User;
