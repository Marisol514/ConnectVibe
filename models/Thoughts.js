// models/Thoughts.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(), // Automatically generate new ID
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280 // Limit reaction text length
  },
  username: {
    type: String,
    required: true // Associate a user with a reaction
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => new Date(createdAtVal).toISOString() // Format date on retrieval
  }
}, {
  toJSON: { getters: true },
  id: false
});

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280 // Limit thought text length
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => new Date(createdAtVal).toISOString() // Format date on retrieval
  },
  username: {
    type: String,
    required: true // Associate a user with a thought
  },
  reactions: [reactionSchema] // Embed reactions within a thought
}, {
  toJSON: { virtuals: true, getters: true },
  id: false
});

// Virtual to count the number of reactions
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);
module.exports = Thought;

