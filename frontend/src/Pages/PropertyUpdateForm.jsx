import React, { useState } from "react";
import axios from "axios";
import "./PropertyUpdateForm.css";

const excludedFields = ["_id", "PPDID", "__v", "photo", "postedBy"];

const PropertyUpdateForm = ({ property, onClose }) => {
  // Initialize updatedData state with the existing property data
  const [updatedData, setUpdatedData] = useState(property);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send updated data to the backend
      const response = await axios.patch(
        `http://localhost:4000/property/updateProperty/${property._id}`,
        updatedData,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      console.log(response.data);
      onClose(); // Close the update form after successful update
    } catch (error) {
      console.error("Error updating property:", error);
    }
  };

  return (
    <div
      className="update-form-container"
    >
      <form onSubmit={handleSubmit}>
        {/* Render input fields for each property attribute */}
        {Object.entries(property).map(
          ([key, value]) =>
            !excludedFields.includes(key) && (
              <div key={key}>
                <label htmlFor={key}>{key}</label>
                {/* Use conditional rendering to check if the field should be a select input */}
                {key === "propertyType" ||
                key === "negotiable" ||
                key === "ownership" ||
                key === "propertyApproved" ? (
                  <select
                    id={key}
                    name={key}
                    value={updatedData[key] || value} // Use updated value if available
                    onChange={handleChange}
                  >
                    {/* Define options for select inputs */}
                    {key === "propertyType" && (
                      <>
                        <option value="house">House</option>
                        <option value="plot">Plot</option>
                        <option value="flat">Flat</option>
                        <option value="shop">Shop</option>
                      </>
                    )}
                    {key === "negotiable" && (
                      <>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </>
                    )}
                    {key === "ownership" && (
                      <>
                        <option value="first owner">First Owner</option>
                        <option value="second owner">Second Owner</option>
                        <option value="third owner">Third Owner</option>
                      </>
                    )}
                    {key === "propertyApproved" && (
                      <>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </>
                    )}
                   
                  </select>
                ) : (
                  // Render a text input for other fields
                  <input
                    type="text"
                    id={key}
                    name={key}
                    value={updatedData[key] || ""} // Use updated value if available
                    onChange={handleChange}
                  />
                )}
              </div>
            )
        )}
        <button type="submit">Update</button>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </form>
    </div>
  );
};

export default PropertyUpdateForm;
