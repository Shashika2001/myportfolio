import React from 'react';
import image01 from '../assets/image01.jpg';


export default function Dashboard() {
  const imageStyle = {
    width: '150px',        // Set the width of the image
    height: '150px',       // Set the height of the image (should match the width for a perfect circle)
    borderRadius: '50%',   // This makes the image rounded
    objectFit: 'cover',    // Ensures the image covers the area without distortion
    placeItems: 'center',  // Aligns the image to the center
  };
  return (
    <div >
      
      <img className='mt-2' src={image01} alt="image01" style={imageStyle}  />

    </div>
  )
}
