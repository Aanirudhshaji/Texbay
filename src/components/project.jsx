import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import img1 from "../assets/embedded.webp";
import img2 from "../assets/branding.webp";
import img3 from "../assets/marketing.webp";
import img4 from "../assets/webdesign.webp";

const projects = [
  {
    id: 1,
    img: img1,
    title: "",
    description: "",
    tags: [],
  },
  {
    id: 2,
    img: img2,
    title: "",
    description: "",
    tags: [],
  },
  {
    id: 3,
    img: img3,
    title: "Dancing Dunes",
    description:
      "Capturing the breathtaking beauty of sand dunes through artistic lensmanship.",
    tags: ["Photography", "Art Direction"],
  },
  {
    id: 4,
    img: img4,
    title: "",
    description: "",
    tags: [],
  },
];

const Project = () => {
  return (
    <section className="py-12 bg-[#f7f7f7]">
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">My Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Witness the beauty of nature through our lens, as we showcase stunning
          landscapes that evoke wonder and appreciation for the environment.
        </p>
      </div>

      {/* Arrows */}
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4 mb-6">
        <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Projects */}
      <div className="flex gap-6 overflow-x-auto px-4 md:px-8 scrollbar-hide">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative min-w-[80%] sm:min-w-[300px] md:min-w-[280px] rounded-2xl overflow-hidden group"
          >
            <img
              src={project.img}
              alt={project.title || "Project Image"}
              className="w-full h-[400px] object-cover"
            />
            {project.title && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-200 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-300 text-gray-800 px-3 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white/20 cursor-pointer">
                  <ArrowRight className="text-white w-5 h-5" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
