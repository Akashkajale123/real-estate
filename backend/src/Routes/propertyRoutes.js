const express = require("express");
const router = express.Router();
const validateUser = require("../MiddleWares/validateUser.js");
const propertyControllers = require("../Controllers/propertyControllers.js");
const multer = require("multer"); 
const cloudinary = require("cloudinary").v2;
const upload = multer({ dest: "uploads/" }); 

// Configure Cloudinary
cloudinary.config({

	cloud_name: "dfigkhihk",
	api_key:"546981989443856",
	api_secret:"6CeEnnAqTxB4Bu1qD_sM-xZMlGE6CeEnnAqTxB4Bu1qD_sM-xZMlGE",
});


// Route for handling file uploads
router.post("/upload", upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        // Upload file to Cloudinary
        cloudinary.uploader.upload(req.file.path, (error, result) => {
            if (error) {
                console.error("Error uploading file to Cloudinary:", error);
                return res.status(500).json({ message: "Server Error" });
            }

            // Send response with Cloudinary URL
            res.json({
                filename: req.file.filename,
                cloudinary_url: result.secure_url
            });
        });
    } catch (error) {
        console.error("Error uploading file:", error);
        res.status(500).json({ message: "Server Error" });
    }
});



router.post("/addproperty/:id", validateUser, propertyControllers.addProperty);
router.get("/getAllProperties/:id", propertyControllers.getAllProperties);
router.delete("/deleteProperty/:_id",validateUser,propertyControllers.deleteProperty);
router.patch("/updateProperty/:id",validateUser,propertyControllers.updateProperty);


module.exports = router;