import React from 'react';
import profileImage from '../assets/image01.jpg';
import {SocialIcon} from 'react-social-icons';

export default function AboutMe() {
  const imageStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  const headerStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  };

  const sectionStyle = {
    marginTop: '10px',
    marginBottom: '20px',
    gap: '10px',
  };
  

  const skillsStyle = {
    listStyleType: 'disc',
    paddingLeft: '20px',
    lineHeight: '1.8',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#007BFF',
    fontWeight: 'bold',
    marginTop: '10px',
    display: 'inline-block',
  };
  const Component = <SocialIcon url="https://twitter.com" />

  return (
    
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      {/* Profile Picture */}
      <img src={profileImage} alt="Profile" style={imageStyle} />
      
      {/* Introduction */}
      <h1 style={headerStyle}>Hi, I'm Shashika Ekanayaka</h1>
      <p>
        I am a passionate software engineer currently pursuing a degree in Computer Science
        at the <strong>University of Colombo School of Computing</strong>. I love building scalable
        applications and solving challenging problems through code.
      </p>
      
      {/* Skills Section */}
      <div style={sectionStyle}>
        <h2 style={{ textDecoration: 'underline' }}>Technical Skills</h2>
        <ul style={skillsStyle}>
          <li><strong>Frontend:</strong> HTML, CSS, React.js</li>
          <li><strong>Backend:</strong> Java Spring Boot, .NET</li>
          <li><strong>Database Management:</strong> MySQL, PostgreSQL</li>
          <li><strong>Version Control:</strong> Git, GitHub</li>
          <li><strong>Other Tools:</strong> Docker, Jenkins</li>
        </ul>
      </div>

      {/* Personal Projects or Interests */}
      <div style={sectionStyle}>
        <h2 style={{ textDecoration: 'underline' }}>About Me</h2>
        <p>
          I enjoy contributing to open-source projects, experimenting with new technologies,
          and collaborating with diverse teams to bring ideas to life. When I'm not coding,
          you can find me exploring nature or reading tech blogs.
        </p>
      </div>
      
      {/* Social Links */}
      <div  style={sectionStyle}>
        <h2 style={{ textDecoration: 'underline' }}>Connect with Me</h2>
        <a  href="https://www.linkedin.com/in/shashika-ekanayaka-828010286" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          LinkedIn 
        </a>
        <SocialIcon url="https://linkedin.com" style={{ height: 30, width: 30 }} />
        <a href="https://github.com/Shashika2001" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          GitHub
        </a>
       <SocialIcon url="https://github.com" style={{ height: 30, width: 30 }} /> 
      </div>
    </div>
  );
}
