// Import necessary modules
const mongoose = require('mongoose');

// Define reaction schema
const reactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  thoughtId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Thought',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

// Create Reaction model
const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;
