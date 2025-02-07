import React from "react";

const projects = [
  {
    title: "Job Listing Web App",
    description: "Web App using React, Tailwind CSS, and JSON Server.",
  },
];
  const Ongoingprojects = [
    {
      title: "Adhyana-Learning Management System",
      description: "Java,MySQL,HTML,CSS,JS",
    },
    {
      title: "Highway Bus seat Booking System",
      description: "flutter,firebase",
    },
     
    
    
];

export default function Projects() {
  return (
    <div className="p-6 bg-black min-h-screen">
      <h1 className="text-3xl text-gray-500 font-bold text-center mb-6">My Projects
        
      </h1>
      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-700 shadow-lg rounded-xl p-6 hover:shadow-2xl transition"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-5">
  <h1 className="text-3xl text-gray-500 font-bold text-center mb-6 flex items-center justify-center">
    OnGoing Projects
    <span className="w-3 h-3 bg-green-500 rounded-full ml-2 animate-pulse"></span>
  </h1>
  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
    {Ongoingprojects.map((project, index) => (
      <div
        key={index}
        className="bg-gray-700 shadow-lg rounded-xl p-6 hover:shadow-2xl transition"
      >
        <h2 className="text-xl font-semibold">{project.title}</h2>
        <p className="text-gray-600 mt-2">{project.description}</p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}
