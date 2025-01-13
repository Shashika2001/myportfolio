import React from 'react';
import image01 from '../assets/image01.jpg';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/projects');
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column', // Arrange everything vertically
    alignItems: 'center',    // Center align all items horizontally
    gap: '20px',             // Add space between items
    textAlign: 'center',     // Center-align text content
    marginTop: '50px',       // Add some margin from the top
  };

  const imageStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  const belowImageTextStyle = {
    marginTop: '10px',
    fontSize: '3rem',
    color: '#555',
    fontWeight: 'bold',
    
  };

  const descriptionStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginTop: '20px', // Add spacing between sections
  };

  const buttonStyle = {
    backgroundColor: '#06b6d4', // Tailwind's cyan-500
    color: 'white',
    padding: '10px 20px',
    borderRadius: '8px',
    marginTop: '15px',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      {/* Image */}
      <img src={image01} alt="Profile" style={imageStyle} />

      {/* Text below the image */}
      <p style={belowImageTextStyle}>Hello, I'm Shashika!</p>

      {/* Description */}
      <div style={descriptionStyle}>
        <h1>Welcome to my portfolio</h1>
        <p>Explore my work and projects.</p>
      </div>

      {/* Projects Section */}
      <div>
        <h2 style={{ fontWeight: '600' }}>My Projects</h2>
        <p>Here are some of the projects I have worked on.</p>
        <button onClick={handleNavigation} style={buttonStyle}>
          View Projects
        </button>
      </div>
    </div>
  );
}
