// backend/controllers/dashboardController.js
const User = require('../models/User');
const ScreenTime = require('../models/ScreenTime');
const Goals = require('../models/Goal');

// Get user data
exports.getUserData = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id }); // Assuming user is authenticated
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({
      name: user.name,
      avatar: user.avatar, // Assuming avatar is stored as a URL
      date: new Date(user.createdAt).toLocaleDateString(),
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user data', error });
  }
};

// Get screen usage data
exports.getScreenUsageData = async (req, res) => {
  try {
    const usageData = await ScreenTime.find({ user: req.user.id });
    const chartData = usageData.map(item => ({
      name: new Date(item.date).toLocaleDateString(),
      population: item.screenTimeInMinutes / 60, // Assuming screen time is stored in minutes
    }));

    res.json(chartData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching screen usage data', error });
  }
};

// Get goals data
exports.getGoalsData = async (req, res) => {
  try {
    const goals = await Goals.find({ user: req.user.id });
    const goalsData = goals.map(goal => ({
      name: goal.name,
      progress: goal.progress, // Assuming progress is a decimal between 0 and 1
    }));

    res.json(goalsData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching goals data', error });
  }
};
