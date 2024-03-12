import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./PropertyList.css";
import { BiPlus } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { FaImage } from "react-icons/fa";
import axios from "axios";
import { useUserData } from "../ContextApi/UserContext";
import PropertyDetailsModal from "./PropertyDetailsModal";
import PropertyUpdateForm from "./PropertyUpdateForm";

const PropertyList = () => {
  const navigate = useNavigate();
  // Define state to hold property data
  const { id } = useUserData();
  const [properties, setProperties] = useState([]);
  const { userId } = useUserData();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProperty, setSelectedProperty] = useState(null); // State to track selected property for modal display
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updatedProperty, setUpdatedProperty] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  // Function to fetch property data from the backend
  const fetchPropertyData = async () => {
    if (!userId) {
      navigate("/");
    }
    try {
      const response = await axios.get(
        `http://localhost:4000/property/getAllProperties/${userId}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setProperties(response.data); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching property data:", error);
    }
  };

  useEffect(() => {
    fetchPropertyData();
  }, [userId]); // Empty dependency array ensures the effect runs only once after the initial render

  const handleSearch = () => {
    // Filter properties based on PPD ID if search query is not empty
    if (searchQuery.trim() !== "") {
      const filteredProperties = properties.filter(
        (property) => property.PPDID === searchQuery.toUpperCase()
      );
      setProperties(filteredProperties);
    } else {
      // If search query is empty, fetch all properties again
      fetchPropertyData();
    }
  };

  const deleteProperty = async (propertyId) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/property/deleteProperty/${propertyId}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      console.log(response.data); // Log the response data
      // If the property is successfully deleted, remove it from the properties state
      setProperties(
        properties.filter((property) => property._id !== propertyId)
      );
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };

  const openPropertyDetails = (property) => {
    setSelectedProperty(property);
    setShowDetailsModal(true);
  };

  const closePropertyDetails = () => {
    setSelectedProperty(null);
    setShowDetailsModal(false);
  };

  const openUpdateForm = (property) => {
    setUpdatedProperty(property);
    setShowUpdateForm(true);
  };

  const closeUpdateForm = () => {
    setShowUpdateForm(false);
    setUpdatedProperty(null);
  };

  return (
    <div className="main-content">
      <div className="search-input-and-btn">
        <div className="search">
          <input
            type="text"
            id="search-input"
            placeholder="Search PPD ID"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span id="vertical-line">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1"
              height="42"
              viewBox="0 0 1 42"
              fill="none"
            >
              <path d="M0.5 0V42" stroke="#E6E6E6" />
            </svg>
          </span>
          <span id="glass" onClick={handleSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M23.739 22.825L17.77 16.856C19.3966 14.8666 20.1964 12.3281 20.0039 9.76557C19.8113 7.20304 18.6412 4.81254 16.7356 3.08853C14.83 1.36452 12.3346 0.438901 9.76565 0.503133C7.1967 0.567364 4.75071 1.61653 2.93362 3.43362C1.11653 5.25071 0.0673644 7.6967 0.00313259 10.2656C-0.0610992 12.8346 0.864519 15.33 2.58853 17.2356C4.31254 19.1412 6.70304 20.3113 9.26557 20.5039C11.8281 20.6964 14.3666 19.8966 16.356 18.27L22.325 24.239C22.4173 24.3345 22.5276 24.4107 22.6496 24.4631C22.7716 24.5155 22.9028 24.5431 23.0356 24.5443C23.1684 24.5454 23.3001 24.5201 23.423 24.4698C23.5459 24.4195 23.6575 24.3453 23.7514 24.2514C23.8453 24.1575 23.9195 24.0459 23.9698 23.923C24.0201 23.8001 24.0454 23.6684 24.0443 23.5356C24.0431 23.4028 24.0155 23.2716 23.9631 23.1496C23.9107 23.0276 23.8345 22.9173 23.739 22.825ZM10.032 18.532C8.44976 18.532 6.90304 18.0628 5.58745 17.1838C4.27185 16.3047 3.24647 15.0553 2.64097 13.5935C2.03547 12.1317 1.87704 10.5231 2.18573 8.97129C2.49441 7.41944 3.25633 5.99397 4.37515 4.87515C5.49397 3.75633 6.91944 2.99441 8.47129 2.68573C10.0231 2.37704 11.6317 2.53547 13.0935 3.14097C14.5553 3.74647 15.8047 4.77185 16.6838 6.08745C17.5628 7.40304 18.032 8.94976 18.032 10.532C18.032 12.6537 17.1892 14.6886 15.6889 16.1889C14.1886 17.6892 12.1537 18.532 10.032 18.532Z"
                fill="#6AB4F8"
              />
            </svg>
          </span>
        </div>

        <button id="add-property-btn">
          <Link
            to="/property-form"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            {" "}
            <BiPlus /> Add Property
          </Link>
        </button>
      </div>
         {/* Render Property Update Form */}
         {showUpdateForm && (
        <PropertyUpdateForm
          property={updatedProperty}
          onClose={closeUpdateForm}
        />
      )}
      {/* Render Property Details Modal */}
      {showDetailsModal && (
        <PropertyDetailsModal
          property={selectedProperty}
          onClose={closePropertyDetails}
        />
      )}
      <table style={{ display: !showUpdateForm && !showDetailsModal ? "table" : "none" }}>
        <thead>
          <tr>
            <th>PPD ID</th>
            <th>Image</th>
            <th>Property</th>
            <th>Contact</th>
            <th>Area</th>
            <th>Views</th>
            <th>Status</th>
            <th>Days Left</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over properties array to render each property */}
          {properties.map((property) => (
            <tr key={property._id}>
              {/* Render property details */}
              <td>{property.PPDID}</td>
              <td>
                <FaImage />
              </td>
              <td>{property.propertyType}</td>
              <td>{property.mobile}</td>
              <td>{property.totalArea}</td>
              <td>{2}</td>
              <td>Sold</td>
              <td>{12}</td>
              <td>
                <FaEye
                  onClick={() => openPropertyDetails(property)}
                  style={{ cursor: "pointer", color: "blue" }}
                />
                {/* Render pencil icon only if the logged-in user posted this property */}
                {id === property.postedBy && (
                  <BsFillPencilFill
                    style={{
                      marginLeft: "15px",
                      color: "green",
                      cursor: "pointer",
                    }}
                    onClick={() => openUpdateForm(property)}
                  />
                )}
                {id === property.postedBy && (
                  <MdDelete
                    style={{
                      color: "red",
                      marginLeft: "15px",
                      cursor: "pointer",
                    }}
                    onClick={() => deleteProperty(property._id)}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyList;
