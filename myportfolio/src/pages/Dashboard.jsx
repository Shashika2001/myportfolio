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

  return (
    <div className="bg-black text-gray-500 min-h-screen w-full">

      {/* Profile Section (Image + Name) */}
      <div className="flex items-center justify-center gap-8">
        
        <h1 className="text-[40px] font-bold">Hello, I'm Shashika!</h1>
      </div>

      {/* Description */}
      <div className="text-center mt-6">
        <h2 className="text-2xl font-semibold">Welcome to my portfolio</h2>
        <p className="text-lg">Explore my work and projects.</p>
      </div>

      {/* Projects Section */}
      <div className="text-center mt-6">
        <h2 className="text-2xl font-semibold">My Projects</h2>
        <p className="text-lg">Here are some of the projects I have worked on.</p>
        <button 
          onClick={handleNavigation} 
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          View Projects
        </button>
      </div>
    </div>
  );
}
