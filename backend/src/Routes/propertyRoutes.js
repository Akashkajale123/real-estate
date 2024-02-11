const express = require('express');
const router = express.Router(); // Create a router

const propertyController = require('../Controllers/propertyControllers.js'); // Import the controller

// Define the route for creating a new property
router.post('/properties',propertyController.createProperty);

module.exports = router;
