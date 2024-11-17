const User = require('../models/User'); // Adjust the path as needed

const getUserData = async (req, res) => {
    try {
        const userId = req.user.id; // Assuming `req.user` contains the authenticated user's ID
        const userData = await User.findByPk(userId);
        if (!userData) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(userData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getUserData };
