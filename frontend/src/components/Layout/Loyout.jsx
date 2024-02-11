// Layout.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import './Layout.css'

const Layout = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;

  // Determine whether to display sidebar and header based on the route
  const displaySidebar = !["/", "/signup"].includes(pathname);
  const displayHeader = !["/", "/signup"].includes(pathname);

  return (
    <div className="container">
      <div className="sidebar-navbar-container">
        {displaySidebar && <Sidebar />}
        <div className="main-content">
          {displayHeader && <Header />}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
