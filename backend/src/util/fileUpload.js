const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  cloud_name: "akashkajale",
  api_key: "546981989443856",
  api_secret: "6CeEnnAqTxB4Bu1qD_sM-xZMlGE",
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    
    // File has been uploaded successfully
    console.log("File is uploaded on cloudinary", response.url);
    
    // Return the response from Cloudinary
    return response;
  } catch (error) {
    // Handle error, including deleting the local file
    console.error("Error uploading file to Cloudinary:", error);
    fs.unlinkSync(localFilePath);
    return null;
  }
};

module.exports = uploadOnCloudinary;
