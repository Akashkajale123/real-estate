const Property = require('../Models/propertySchema.js'); // Import the Property model

// Controller function to handle POST request for creating a new property
const createProperty = async (req, res) => {
  const {
    basicInfo,
    propertyDetails,
    generalInfo,
    locationInfo
  } = req.body;

  try {
    const property = new Property({
      basicInfo,
      propertyDetails,
      generalInfo,
      locationInfo
    });

    const newProperty = await property.save();
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


module.exports = {
  createProperty
};
