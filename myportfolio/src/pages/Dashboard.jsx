import React from 'react';
import image01 from '../assets/image01.jpg';
import { useNavigate } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';

export default function Dashboard() {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/projects');
  };
  const styles = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 },
  });

  const containerStyle = {
    minHeight: '100vh',       // Ensure full viewport height
    display: 'flex',
    flexDirection: 'column', // Arrange everything vertically
    alignItems: 'center',    // Center align all items horizontally
    gap: '20px',             // Add space between items
    textAlign: 'center',     // Center-align text content
           // Add some margin from the top
  };

  const imageStyle = {
    marginTop: '20px', // Add some margin from the top
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  const belowImageTextStyle = {
    marginTop: '10px',
    fontSize: '3rem',
    color: 'gray',
    fontWeight: 'bold',
    border: '4px solid #06b6d4',
    padding: '10px',
    borderRadius: '8px',
    
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
    <div className='bg-gradient-to-r from-black to-light-blue-500'>
    <div style={containerStyle} >
      {/* Image */}
      <img src={image01} alt="Profile" style={imageStyle} />

      {/* Text below the image */}
      <animated.div style={styles}>
      <p style={belowImageTextStyle}>Hello, I'm Shashika!</p>
      </animated.div>

      {/* Description */}
      <div style={descriptionStyle}>
        <h2 style={styles}>Welcome to my portfolio</h2>
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
    </div>
  );
}
