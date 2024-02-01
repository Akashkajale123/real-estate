import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="main-box">
      <div className="sidebar">
        <h1 className="logo">Logo</h1>
        <ul>
          <li>Property</li>
          <li>Assistance</li>
          <li>Received Interest</li>
          <li>Sent Interest</li>
          <li>Property Views</li>
          <li>Tariff Plan</li>
        </ul>
      </div>
      <div className="right">
        <div className="top-bar">
          <h2 className="userid">USER ID : 06PPD125</h2>
          <h2 className="user">User Name</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
