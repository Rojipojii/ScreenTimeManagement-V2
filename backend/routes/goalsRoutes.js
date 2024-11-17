const express = require('express');
const { getGoalsData } = require('../controllers/goalController');

const router = express.Router();

router.get('/goals', getGoalsData);

module.exports = router;
