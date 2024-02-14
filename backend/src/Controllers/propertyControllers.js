
const Property = require('../Models/propertySchema.js');
const User = require('../Models/User.js')

 exports.addProperty=async(req, res)=>{
  try {
      const propertyData = req.body; // Assuming request body contains property data
      
      const userId = req.params.id;
      // Create a new property document
      const property = new Property({
          ...propertyData,
          postedBy: userId // Assign the user's ObjectId to the postedBy field
      });

      // Save the property document to the database
      await property.save();
       // Update the user's property array in the User model
    await User.findByIdAndUpdate(userId, { $push: { properties: property._id } });

      res.status(201).json({ status: 'success', message: 'Property saved successfully' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Failed to save property' });
  }
};



