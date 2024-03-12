import React from "react";
import "./PropertyDetailsModal.css"; // Import CSS file for styling the modal

const PropertyDetailsModal = ({ property, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Property Details</h2>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-body">
          <img
            className="property-image"
            src={property.photo}
            alt="property-image"
            style={{ width: "250px", height: "250px", border: "border-boxing" }}
          />

          <ul className="form">
            <li>Proprty_ID: {property.PPDID}</li>
            <li>Proprty_Type: {property.propertyType}</li>
            <li>Proprty_owner: {property.name}</li>
            <li>contact_no: {property.mobile}</li>
            <li>email Id: {property.email}</li>
            <li>Price: {property.price}</li>
            <li>Negaotiable: {property.negotiable}</li>
            <li>Property_Age: {property.propertyAge}</li>
            <li>Ownership: {property.ownership}</li>
            <li>Description: {property.propertyDescription}</li>
            <li>Bank Loan: {property.bankLoan}</li>
          </ul>
          <ul className="form2">
            <li>Length: {property.length}</li>
            <li>Breath: {property.breath}</li>
            <li>Total Area: {property.totalArea}</li>
            <li>Area Unit: {property.areaUnit}</li>
            <li>No of BHK: {property.bhk}</li>
            <li>No of Floors: {property.noOfFloors}</li>
            <li>Attached: {property.attached}</li>
            <li>Western Toilet: {property.westernToilet}</li>
            <li>Furnished: {property.furnished}</li>
            <li>Car Parking: {property.carParking}</li>
            <li>Lift: {property.lift}</li>
            <li>Electricity: {property.electricity}</li>
            <li>Facing: {property.facing}</li>
          </ul>
          <ul className="form3">
            <li>Sale Type: {property.saleType}</li>
            <li>Featured Package: {property.featuredPackage}</li>
            <li>PPD Package: {property.ppdPackage}</li>
            <li>City: {property.city}</li>
            <li>Area: {property.area}</li>
            <li>Pincode: {property.pincode}</li>
            <li>Address: {property.address}</li>
            <li>Landmark: {property.landmark}</li>
            <li>Latitude: {property.latitude}</li>
            <li>Longitude: {property.longitude}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsModal;
