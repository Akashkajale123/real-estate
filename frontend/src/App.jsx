import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Correct import statement
import Home from './components/pages/Home';
import Page1 from './components/pages/Page1';
import Page2 from './components/pages/Page2';
import Sidebar from './Sidebar';
import Header from './Header';
import HomePage from './HomePage';
import './Style.css'
import SignUp from './components/auth/SignUp';
import SignIN from './components/auth/SignIN';

const App = () => {
  const location = useLocation();
  const { pathname } = location;

  // Define routes where sidebar and header should not be displayed
  const noSidebarRoutes = ['/', '/signup'];

  // Check if the current route is one of the no-sidebar routes
  const displaySidebar = !noSidebarRoutes.includes(pathname);
  return (
    <>
      <div className="app">
      {displaySidebar && <Sidebar />}
        <div className="main-content">
        {displaySidebar && <Header />}
          <Routes>
            <Route path="/home" element={<HomePage/>} />
            <Route path="/page1" element={<Page1/>} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/" element={<SignIN />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
