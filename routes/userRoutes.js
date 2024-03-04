// Import necessary modules
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateUser } = require('../middleware/authMiddleware');

// Define user routes
router.post('/', userController.createUser);
// Add more routes as needed...

// Export the router
module.exports = router;
