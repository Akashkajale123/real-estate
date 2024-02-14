const express = require('express');
const router = express.Router(); // Create a router
const validateUser = require('../MiddleWares/validateUser.js')
const propertyControllers = require('../Controllers/propertyControllers.js'); // Import the controller

// Define the route for creating a new property
router.post('/addproperty/:id',validateUser,propertyControllers.addProperty);
router.get('/getAllProperties',propertyControllers.getAllProperties);

module.exports = router;
