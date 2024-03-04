// Import necessary modules
const express = require('express');
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// Create a router
const router = express.Router();

// Mount user routes
router.use('/users', userRoutes);

// Mount thought routes
router.use('/thoughts', thoughtRoutes);

// Export the router
module.exports = router;
