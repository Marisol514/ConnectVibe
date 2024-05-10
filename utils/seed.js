const mongoose = require('mongoose');
const { User, Thought } = require('../models');
const connectDB = require('../config/connection');

const users = [
  { username: 'lernantino', email: 'lernantino@gmail.com' },
  { username: 'amiko', email: 'amiko2k20@aol.com' },
  { username: 'sophie', email: 'coolwolfie@aol.com' },
  { username: 'ricky', email: 'Ricky@gmail.com' }
];

const thoughts = [
  {
    thoughtText: "Here's a cool thought...",
    username: 'lernantino',
    reactions: [
      { reactionBody: "Wow, that's insightful!", username: "amiko" },
      { reactionBody: "Thanks for sharing!", username: "sophie" }
    ]
  },
  {
    thoughtText: "This is another thought!",
    username: 'amiko',
    reactions: [
      { reactionBody: "Interesting thought!", username: "lernantino" }
    ]
  },
  {
    thoughtText: "I love walks and treats!",
    username: 'sophie',
    reactions: [{ reactionBody: "who doesn't love treats sophie!", username: "amiko" }]
  },
  {
    thoughtText: "I adore sophie!",
    username: 'ricky',
    reactions: [{ reactionBody: "Thanks ricky!", username: "Sophie"}]
  }
];

// Connect to MongoDB and run the seeding script
connectDB().then(() => {
  console.log("Connected to MongoDB, starting to seed...");
  runSeed();
}).catch(err => {
  console.error("Failed to connect to MongoDB", err);
});

async function runSeed() {
  try {
    console.log('Deleting existing users...');
    await User.deleteMany({});
    console.log('Deleting existing thoughts...');
    await Thought.deleteMany({});

    console.log('Inserting new users...');
    const createdUsers = await User.insertMany(users);
    console.log('Users inserted successfully.');

    console.log('Preparing thoughts...');
    const modifiedThoughts = thoughts.map((thought, index) => ({
      ...thought,
      userId: createdUsers[index % createdUsers.length]._id
    }));

    console.log('Inserting new thoughts...');
    await Thought.insertMany(modifiedThoughts);
    console.log('Thoughts inserted successfully.');

    console.log('Linking friends...');
    await Promise.all(createdUsers.map((user, index) => {
      let friendIds = createdUsers.filter((_, i) => i !== index).map(user => user._id);
      return User.findByIdAndUpdate(user._id, { $set: { friends: friendIds } });
    }));
    console.log('Friends linked successfully.');

    console.log('Database seeded! 🌱');
    process.exit(0);
  } catch (err) {
    console.error("Error seeding the database:", err);
    process.exit(1);
  }
}