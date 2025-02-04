import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

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

  return (
    <div className="bg-black text-gray-500 min-h-screen w-full">

      {/* Profile Section (Image + Name) */}
      <div className="flex items-center justify-center gap-8">
        <h1 className="text-[40px] font-bold">Hello, I'm Shashika!</h1>
      </div>

      {/* Description */}
      <div className='flex items-center justify-center gap-8 mt-2'>
        CS @UCSC | Software Engineer | Tech Enthusiast | MS Student Ambassador
      </div>
      
      {/* Projects Section */}
      <div className="text-center mt-6">
        <h2 className="text-2xl font-semibold">My Projects</h2>
        <p className="text-lg">Here are some of the projects I have worked on.</p>
        <button 
          onClick={handleNavigation} 
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          My works
        </button>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6 text-2xl">
          <a href="https://github.com/Shashika2001" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/shashika-ekanayaka-828010286/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
            <FaLinkedin />
          </a>
          <a href="ekanayakespm@gmail.com" className="hover:text-gray-300 transition">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
}
