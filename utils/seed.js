const mongoose = require('mongoose');
const { User, Thought } = require('../models');
const connectDB = require('../config/connection');

connectDB();

const seedDatabase = async () => {
  await mongoose.connection.db.dropDatabase();

  const users = await User.create([
    {
      username: "lernantino",
      email: "lernantino@gmail.com"
    },
    {
      username: "amiko",
      email: "amiko2k20@aol.com"
    }
  ]);

  const thoughts = await Thought.create([
    {
      thoughtText: "Here's a cool thought...",
      username: "lernantino",
      reactions: [
        {
          reactionBody: "Wow, that's deep.",
          username: "amiko"
        }
      ]
    },
    {
      thoughtText: "I need coffee...",
      username: "amiko",
      reactions: [
        {
          reactionBody: "I prefer tea.",
          username: "lernantino"
        }
      ]
    }
  ]);

  console.log('Database seeded!');
  process.exit(0);
};

seedDatabase();
