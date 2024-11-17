const express = require('express');
const sequelize = require('./config/db');
const errorMiddleware = require('./middleware/errorMiddleware');
const cors = require('cors');  // Import CORS

const app = express();

require('dotenv').config();

// Middleware to enable CORS
app.use(cors({
   origin: 'http://localhost:8081',  // The URL where your frontend is running
   methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allowed methods
   credentials: true,  // Allows cookies or credentials to be included in the request
}));

// Middleware to parse incoming JSON requests
app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Custom error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);  // Log the error stack to the console
    res.status(500).send('Something went wrong on the server!');  // Send a 500 status with a generic message
});

// Error handling middleware
app.use(errorMiddleware);  // If you have a global error middleware, keep it here as well

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
   console.log(`Server running on port ${PORT}`);
   try {
       await sequelize.sync();
       console.log('Database synced');
   } catch (err) {
       console.error('Error syncing database:', err);
   }
});
