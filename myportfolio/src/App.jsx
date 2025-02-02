import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutme from './pages/Aboutme.jsx';
import Contact from './pages/Contact.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Projects from './pages/Projects.jsx';
import {FaMoon, FaSun} from 'react-icons/fa';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Manage dark mode state

  // Toggle theme
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Define styles for light and dark themes
  const appStyle = {
    backgroundColor: isDarkMode ? '#121212' : '#ffffff', // Dark mode: Black, Light mode: White
    color: isDarkMode ? '#ffffff' : '#000000', // Adjust text color
    minHeight: '100vh', // Ensure full viewport height
    transition: 'all 0.3s ease-in-out', // Smooth transition for theme change
  };

  const buttonStyle = {
    position: 'fixed', // Keep button in a consistent position
    top: '10px',
    right: '10px',
    backgroundColor: isDarkMode ? '#bb86fc' : '#06b6d4', // Adjust button colors
    color: '#ffffff',
    padding: '5px 5px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={appStyle}>
      
      {/* Routes and Navbar */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<Aboutme />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
