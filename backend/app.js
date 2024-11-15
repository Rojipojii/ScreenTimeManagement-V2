const express = require('express');
const sequelize = require('./config/db');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();

require('dotenv').config();

// Middleware
app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Error handling
app.use(errorMiddleware);

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
