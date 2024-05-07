const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { 
    type: String, 
    unique: true, 
    required: true, 
    trim: true
  },
  email: { 
    type: String, 
    unique: true, 
    required: true, 
    match: [/.+\@.+\..+/, 'Please enter a valid email address']
  },
  thoughts: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Thought'
  }],
  friends: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'User'
  }]
}, { 
  toJSON: { virtuals: true }, 
  toObject: { virtuals: true }
});

// Indexes to improve performance
userSchema.index({ username: 1 });  // Index on username for quick look-up
userSchema.index({ email: 1 });     // Index on email for quick look-up

userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = mongoose.model('User', userSchema);
module.exports = User;
