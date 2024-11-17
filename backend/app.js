// app.js

const express = require('express');
const sequelize = require('./config/db');
const errorMiddleware = require('./middleware/errorMiddleware');
const cors = require('cors');
const screenTimeController = require('./controllers/ScreenTimeController'); // Import your controller
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');





const app = express();

app.use('/api/user', userRoutes);

// Middleware to enable CORS
app.use(cors({
    origin: 'http://localhost:8081',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

// Middleware to parse incoming JSON requests
app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const screenTimeRoutes = require('./routes/screenTimeRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/screen-time', screenTimeRoutes);

// API Endpoints for ScreenTime, User Data, and Goals
app.get('/api/user/:userId', screenTimeController.getUserData);
app.get('/api/screen-usage', screenTimeController.getScreenTimeData);
app.get('/api/goals', screenTimeController.getGoals);

// Custom error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong on the server!');
});

// Global error handling middleware
app.use(errorMiddleware);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    try {
        await sequelize.sync(); // Sync database
        console.log('Database synced');
    } catch (err) {
        console.error('Error syncing database:', err);
    }
});
