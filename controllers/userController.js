// controllers/userController.js
const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
  // existing code...
};

exports.getUserById = async (req, res) => {
  // existing code...
};

exports.createUser = async (req, res) => {
  // existing code...
};

exports.updateUser = async (req, res) => {
  // existing code...
};

exports.deleteUser = async (req, res) => {
  // existing code...
};

// Add a friend to the user's friend list
exports.addFriend = async (req, res) => {
  try {
    // $addToSet avoids adding the same friend twice
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    ).populate('friends'); // Optionally populate the friends list

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Remove a friend from the user's friend list
exports.removeFriend = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      { $pull: { friends: req.params.friendId } },
      { new: true }
    ).populate('friends'); // Optionally populate the friends list

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

