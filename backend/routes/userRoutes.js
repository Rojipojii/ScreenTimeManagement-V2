const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// Use the method from the userController
router.get('/:user_id', userController.getUserData); // Matches /api/user

module.exports = router;
