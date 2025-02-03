import React from "react";

const projects = [
  {
    title: "Project One",
    description: "This is a description of Project One.",
  },
  {
    title: "Project Two",
    description: "This is a description of Project Two.",
  },
  {
    title: "Project Three",
    description: "This is a description of Project Three.",
  },
];

export default function Projects() {
  return (
    <div className="p-6 bg-black min-h-screen">
      <h1 className="text-3xl text-gray-500 font-bold text-center mb-6">My Projects</h1>
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
    </div>
  );
}
