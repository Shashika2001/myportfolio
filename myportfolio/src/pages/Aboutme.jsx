import React from 'react';
import profileImage from '../assets/image01.jpg';


export default function AboutMe() {
  const imageStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    margin: ' auto',
  };




 
  

  return (
    
    <div className='bg-black'>
      {/* Profile Picture */}
      <img src={profileImage} alt="Profile" style={imageStyle} />
      
      {/* Introduction */}
      <h1 className='text-gray-500 font-bold'>Hi, I'm Shashika Ekanayaka</h1>
      <div className="mt-5 bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-xl mx-auto">
  <p className="text-gray-300 font-bold">
    I am a passionate software engineer currently pursuing a degree in Computer Science
    at the <strong className="text-white">University of Colombo School of Computing</strong>. 
    I love building scalable applications and solving challenging problems through code.
  </p>
</div>

      {/* Skills Section */}
      <div className="mt-5 bg-gray-800 text-gray-400 p-6 rounded-lg shadow-lg w-full max-w-xl mx-auto" >
        <h1 className='text-2xl underline font-bold'>Technical Skills</h1>
        <ul>
          <li><strong className='text-gray-200'>Frontend:</strong> HTML, CSS, React.js</li>
          <li><strong className='text-gray-200'>Backend:</strong> Java Spring Boot, .NET</li>
          <li><strong className='text-gray-200'>Database Management:</strong> MySQL, PostgreSQL</li>
          <li><strong className='text-gray-200'>Version Control:</strong> Git, GitHub</li>
          <li><strong className='text-gray-200'>Other Tools:</strong> Docker, Jenkins</li>
        </ul>
      </div>

      {/* Personal Projects or Interests */}
      <div className="mt-5 bg-gray-800 text-gray-400 p-6 rounded-lg shadow-lg w-full max-w-xl mx-auto">
        <h2>About Me</h2>
        <p>
          I enjoy contributing to open-source projects, experimenting with new technologies,
          and collaborating with diverse teams to bring ideas to life. When I'm not coding,
          you can find me exploring nature or reading tech blogs.
        </p>
      </div>
      
      
      
    </div>
  );
}
