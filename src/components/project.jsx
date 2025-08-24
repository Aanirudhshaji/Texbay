// Project.jsx
import React from "react";
import { motion } from "framer-motion";

import img1 from "../assets/project/pro1.jpg";
import img2 from "../assets/project/pro2.jpg";
import img3 from "../assets/project/pro3.jpg";
import img4 from "../assets/project/pro4.webp";

const projects = [
  {
    id: 1,
    title: "IPHONE XR",
    category: "Social Media",
    date: "April 2024",
    image: img1,
  },
  {
    id: 2,
    title: "VICTORIA SECRET",
    category: "Marketing",
    date: "June 2024",
    image: img2,
  },
  {
    id: 3,
    title: "SOCIAL MEDIA STRATEGY",
    category: "Branding",
    date: "July 2024",
    image: img3,
  },
  {
    id: 4,
    title: "WEB DESIGN UI/UX",
    category: "Web Development",
    date: "August 2024",
    image: img4,
  },
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Project = () => {
  return (
    <section className="w-full bg-[#fbfbfb] py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-black font-medium tracking-wide mb-2">
              Curious about what we&apos;ve created?
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-roboto font-bold text-[#002bba] leading-tight">
              Explore Our Most <br /> Successful Project
            </h2>
          </motion.div>

          {/* Desktop Button */}
          <motion.div
            className="hidden md:flex flex-col items-start md:items-end text-left md:text-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-700 text-lg mb-4 max-w-md">
              We connect your brand with the right influencers, forging
              authentic partner that amplify your message.
            </p>
            <a
              href="/work"
              className="inline-flex items-center gap-2 px-5 py-2 border-2 border-[#002bba] text-[#002bba] font-semibold rounded-full hover:bg-[#002bba] hover:text-white transition-colors duration-300"
            >
              See all project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Project Grid (All 4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="group"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl shadow-lg">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Text Section */}
              <div className="mt-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  {project.title}
                </h3>
                <span className="px-3 py-1 text-sm border border-gray-400 rounded-full">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Button (bottom) */}
        <div className="flex md:hidden justify-center mt-10">
          <a
            href="/work"
            className="inline-flex items-center gap-2 px-5 py-2 border-2 border-[#002bba] text-[#002bba] font-semibold rounded-full hover:bg-[#002bba] hover:text-white transition-colors duration-300"
          >
            See all project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
