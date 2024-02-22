const cloudinary = require("cloudinary").v2;
const fs = require('fs');

cloudinary.config({ 
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME, 
  api_key:process.env.CLOUDINARY_API_KEY , 
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary= async(localFilePath)=>{
    try {
        if(!localFilePath) return null
        // uppload the file on cloudinary
        await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"

        })
        // file has been uploaded succesfully 
        console.log("file is uploaded on cloudinary",response.url );
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath)  // remove locally saves temp file as the upload operation got failed
        return null; 
    }
}
module.exports =uploadOnCloudinary;
// cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" }, 
//   function(error, result) {console.log(result); });