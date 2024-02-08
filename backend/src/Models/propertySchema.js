const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  basicInfo: {
    propertyType: String,
    negotiable: String,
    price: Number,
    ownership: String,
    propertyAge: Number,
    propertyApproved: String,
    propertyDescription: String,
    bankLoan: Number,
  },
  propertyDetails: {
    length: Number,
    breath: Number,
    totalArea: Number,
    areaUnit: String,
    bhk: String,
    noOfFloors: String,
    attached: String,
    westernToilet: String,
    furnished: String,
    carParking: String,
    lift: String,
    electricity: String,
    facing: String,
  },
  generalInfo: {
    name: String,
    mobile: String,
    postedBy: String,
    saleType: String,
    featuredPackage: String,
    ppdPackage: String,
    photo: String, // Store the URL of the photo
  },
  locationInfo: {
    email: String,
    city: String,
    area: String,
    pincode: String,
    address: String,
    landmark: String,
    latitude: String,
    longitude: String,
  },
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
