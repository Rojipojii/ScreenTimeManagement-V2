// controllers/ScreenTimeController.js
const path = require('path');
const ScreenTime = require('../models/ScreenTime');
const User = require('../models/User');
const Goal = require('../models/Goal');


// Get all screen time records
exports.getScreenTimeData = async (req, res) => {
  try {
    const screenTimeData = await ScreenTime.findAll();  // Fetch all screen time data
    res.json(screenTimeData);  // Send back the data as JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while fetching screen time data' });
  }
};

// Get user data by user ID
exports.getUserData = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.userId } });  // Fetch user by ID
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);  // Send back the user data as JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while fetching user data' });
  }
};

// Get current goals
exports.getGoals = async (req, res) => {
  try {
    const goals = await Goal.findAll();  // Fetch all goals
    res.json(goals);  // Send back the goals as JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while fetching goals' });
  }
};
