// models/User.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { 
    type: String, 
    unique: true, 
    required: true, 
    trim: true // Trims whitespace from the username
  },
  email: { 
    type: String, 
    unique: true, 
    required: true, 
    match: [/.+\@.+\..+/, 'Please fill a valid email address'] // Ensures email format
  },
  thoughts: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Thought' // Reference to Thought model
  }],
  friends: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'User' // Self-reference to allow user friendships
  }]
}, { 
  toJSON: { virtuals: true }, 
  toObject: { virtuals: true }
});

// Virtual for calculating number of friends
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = mongoose.model('User', userSchema);
module.exports = User;

