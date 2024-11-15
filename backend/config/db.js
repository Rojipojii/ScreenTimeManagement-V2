require('dotenv').config();
const { Sequelize } = require('sequelize');

// Initialize Sequelize with environment variables
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false,
    }
);

sequelize.authenticate()
    .then(() => console.log('Database connected successfully.'))
    .catch(error => console.log('Error connecting to the database:', error));

module.exports = sequelize;
