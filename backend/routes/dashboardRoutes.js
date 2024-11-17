// backend/routes/dashboardRoutes.js
const express = require('express');
const router = express.Router();
const { getUserData, getScreenUsageData, getGoalsData } = require('../controllers/dashboardController');

// Route to get user data
router.get('/user', getUserData);

// Route to get screen usage data
router.get('/screen-usage', getScreenUsageData);

// Route to get goals data
router.get('/goals', getGoalsData);

module.exports = router;
