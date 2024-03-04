// Import necessary modules
const mongoose = require('mongoose');

// Define thought schema
const thoughtSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  reactions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reaction',
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create Thought model
const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
