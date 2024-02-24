const express = require("express");
const router = express.Router(); // Create a router
const validateUser = require("../MiddleWares/validateUser.js");
const propertyControllers = require("../Controllers/propertyControllers.js"); // Import the controller
const { upload } = require("../MiddleWares/multer.middleware.js");
// Define the route for creating a new property
// Route for uploading files
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    res
      .status(200)
      .json({
        message: "File uploaded successfully",
        filename: req.file.originalname,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to upload file" });
  }
});
router.post("/addproperty/:id", validateUser, propertyControllers.addProperty);
router.get("/getAllProperties/:id", propertyControllers.getAllProperties);

module.exports = router;
