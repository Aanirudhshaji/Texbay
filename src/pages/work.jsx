// Work.jsx
import React from "react";
import { motion } from "framer-motion"; // animation library
import CTA from "./cta";
import img from "../assets/1.jpg";
import pro1 from "../assets/project/pro1.jpg";
import pro2 from "../assets/project/pro2.jpg";
import pro3 from "../assets/project/pro3.jpg";
import pro4 from "../assets/project/pro4.webp";
import titleVideo from "../assets/project/title.mp4"; // inline video

const projects = [
  { 
    id: 1, 
    name: "Johnson Winter Slattery", 
    title: "Redefining the digital presence of Johnson Winter Slattery", 
    img: pro1 
  },
  { 
    id: 2, 
    name: "Beatrix Bakes", 
    title: "Whipping up an iconic brand and digital experience", 
    img: pro2 
  },
  { 
    id: 3, 
    name: "Instant Scripts", 
    title: "Transforming telehealth", 
    img: pro3
  },
  { 
    id: 4, 
    name: "FutureWorks", 
    title: "Content marketing and digital PR innovation", 
    img: pro4
  },
  { 
    id: 5, 
    name: "GreenTech", 
    title: "Driving thought leadership in sustainability", 
    img 
  },
  { 
    id: 6, 
    name: "NextWave", 
    title: "Corporate communications and crisis management", 
    img 
  },
];

function Work() {
  return (
    <main className="bg-[#fbfbfb] text-[#002bba]">
      {/* Hero Title Section */}
      <section className="w-full px-4 md:px-10 lg:px-20 pt-20 md:pt-32 pb-8 md:pb-12 bg-[#fbfbfb]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          {/* Left: Big Title */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="leading-[0.9] font-roboto font-medium text-[3.5rem] sm:text-[5rem] lg:text-[5.5rem] tracking-tight"
          >
            <h1 className="flex flex-wrap items-center gap-2">The Problems</h1>
            <div className="flex items-center gap-2 mt-2">
              <span>We</span>
              <span className="inline-block w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[80px] lg:h-[80px] rounded-xl overflow-hidden">
                <video
                  src={titleVideo}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </span>
              <span>Solved</span>
            </div>
          </motion.div>

          {/* Right: Description */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-xl text-lg sm:text-xl leading-relaxed font-poppins font-medium text-neutral-800 lg:self-end"
          >
            Clients globally come to us with either one of these problems:
            <span className="font-bold"> Demand</span> or
            <span className="font-bold"> Discovery</span>. We drive search
            demand or discovery for brands with ambitions to be category
            leaders.
          </motion.div>
        </div>

        {/* Full-width divider line */}
        <div className="w-full h-px bg-neutral-300 mt-10"></div>
      </section>

      {/* Card Grid Section */}
      <section className="w-full px-4 md:px-10 lg:px-20 py-12 bg-[#fbfbfb]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              {/* Image */}
              <motion.div 
                whileHover={{ scale: 1.03 }} 
                transition={{ type: "spring", stiffness: 200 }}
                className="relative w-full rounded-2xl overflow-hidden"
              >
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-[360px] md:h-[420px] lg:h-[440px] object-cover rounded-2xl"
                />

                {project.badge && (
                  <img
                    src={project.badge}
                    alt="badge"
                    className="absolute bottom-4 right-5 w-20 h-20 object-contain"
                  />
                )}
              </motion.div>

              {/* Text below image */}
              <h3 className="mt-6 text-2xl md:text-[28px] font-semibold leading-tight text-neutral-900">
                {project.name}
              </h3>
              <p className="mt-2 text-base md:text-lg text-neutral-600">
                {project.title}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}

export default Work;
