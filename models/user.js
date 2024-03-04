// Import necessary modules
const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // Add more fields as needed (e.g., password, profile picture, etc.)
});

// Create User model
const User = mongoose.model('User', userSchema);

module.exports = User;
