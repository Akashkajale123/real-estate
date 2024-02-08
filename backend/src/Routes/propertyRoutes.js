const express = require("express");
const  createProperty=require('../Controllers/propertyControllers.js');
const validateUser=require('../MiddleWares/validateUser.js')
const router = express.Router();

router.post("/propertyList",validateUser,createProperty);

module.exports = router;