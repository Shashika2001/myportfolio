import React from 'react';
import image01 from '../assets/image01.jpg';

export default function Dashboard() {
  const containerStyle = {
    display: 'flex',       // Makes the container a flexbox
    alignItems: 'center',  // Vertically align the image-text block and right-side text
    gap: '20px',           // Add space between the image-text block and right-side text
  };

  const imageTextContainerStyle = {
    display: 'flex',       // Makes the image and its text block a flex column
    flexDirection: 'column', // Arrange items vertically (image and text under it)
    alignItems: 'center',  // Center align the image and its text
  };

  const imageStyle = {
    width: '150px',        // Set the width of the image
    height: '150px',       // Set the height of the image
    borderRadius: '50%',   // This makes the image rounded
    objectFit: 'cover',    // Ensures the image covers the area without distortion
  };

  const textStyle = {
    fontSize: '1.5rem',     // Font size of the right-side text
    fontWeight: 'bold',     // Makes the text bold
  };

  const belowImageTextStyle = {
    marginTop: '10px',      // Add spacing between the image and text below it
    fontSize: '1rem',       // Font size for the text under the image
    color: '#555',          // Set a subtle color for the text
  };

  return (
    <div style={containerStyle}>
      {/* Image and Text under the image */}
      <div style={imageTextContainerStyle}>
        <img src={image01} alt="Profile" style={imageStyle} />
        <p style={belowImageTextStyle}>Hello, I'm Shashika!</p>
       
      </div>

      {/* Text on the right side */}
      <div style={textStyle}>
        <h1>Welcome to my portfolio</h1>
        <p>Explore my work and projects.</p>
      </div>
    </div>
  );
}
