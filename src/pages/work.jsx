// Work.jsx
import React from "react";

const projects = [
  {
    id: 1,
    title: "Fashion Branding",
    category: "Brand Identity",
    image: "https://assets.website-files.com/6356f12b30e9da6f09df9937/6356f35e2b6a59f1b06cbe1f_project-01-p-800.jpg",
  },
  {
    id: 2,
    title: "Creative Photography",
    category: "Photography",
    image: "https://assets.website-files.com/6356f12b30e9da6f09df9937/6356f365b6f35d6a89dc3d9b_project-02-p-800.jpg",
  },
  {
    id: 3,
    title: "UI/UX Website Design",
    category: "Web Design",
    image: "https://assets.website-files.com/6356f12b30e9da6f09df9937/6356f35ec7747c249f02f908_project-03-p-800.jpg",
  },
  {
    id: 4,
    title: "Architecture Visualization",
    category: "3D Design",
    image: "https://assets.website-files.com/6356f12b30e9da6f09df9937/6356f365b0b2b36e0a8f7867_project-04-p-800.jpg",
  },
];

const Work = () => {
  return (
    <section className="w-full bg-[#f9f9f9] py-16 px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Selected Works
        </h2>
        <p className="text-gray-600 text-lg md:text-xl">
          A curated collection of projects showcasing creativity, branding, and design excellence.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div key={project.id} className="group relative overflow-hidden rounded-2xl shadow-lg">
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[350px] object-cover transform group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
              <div>
                <p className="text-white text-sm uppercase tracking-wide mb-2">{project.category}</p>
                <h3 className="text-white text-2xl font-semibold">{project.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
