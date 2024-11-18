// routes/screenTimeRoutes.js
const express = require('express');
const screenTimeController = require('../controllers/ScreenTimeController');
const router = express.Router();

router.get('/user/:userId', screenTimeController.getUserData);
router.get('/screen-usage', screenTimeController.getScreenTimeData);
router.get('/goals', screenTimeController.getGoals);


module.exports = router;
