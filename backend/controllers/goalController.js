const { Goal } = require('../models');

const getGoalsData = async (req, res) => {
  try {
    const goals = await Goal.findAll();  // Fetch all goals
    res.json(goals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getGoalsData };
