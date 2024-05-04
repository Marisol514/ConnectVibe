const mongoose = require('mongoose');
const { User, Thought } = require('../models');
const connectDB = require('../config/connection');

// Sample data
const users = [
  { username: 'lernantino', email: 'lernantino@gmail.com' },
  { username: 'amiko', email: 'amiko2k20@aol.com' }
];

const thoughts = [
  { thoughtText: "Here's a cool thought...", username: 'lernantino' },
  { thoughtText: "This is another thought!", username: 'amiko' }
];

// Connect to MongoDB
connectDB();

// Function to seed data
const seedDatabase = async () => {
  try {
    await Thought.deleteMany({});
    await User.deleteMany({});

    const createdUsers = await User.insertMany(users);
    thoughts.forEach((thought, index) => {
      thought.userId = createdUsers[index % createdUsers.length]._id;
    });
    await Thought.insertMany(thoughts);

    console.log('Database seeded! 🌱');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDatabase();

