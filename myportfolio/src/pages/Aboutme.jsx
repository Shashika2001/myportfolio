import React from 'react';
import image01 from '../assets/image01.jpg';

export default function Aboutme() {
  const imageStyle = {
    width: '150px',        // Set the width of the image
    height: '150px',       // Set the height of the image
    borderRadius: '50%',   // This makes the image rounded
    objectFit: 'cover',    // Ensures the image covers the area without distortion
  };
  return (
    <div>
      About me
      <img src={image01} alt="Profile" style={imageStyle}/>
    </div>
  )
}
