import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

import img1 from "../assets/embedded.webp";
import img2 from "../assets/branding.webp";
import img3 from "../assets/marketing.webp";
import img4 from "../assets/webdesign.webp";

const baseProjects = [
  { id: 1, image: img1 },
  { id: 2, image: img2 },
  { id: 3, image: img3 },
  { id: 4, image: img4 },
];

const Projects = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    let animationFrameId1, animationFrameId2;

    const setupSmoothScroll = (ref, direction = 1, speed = 0.5) => {
      const container = ref.current;
      if (!container || container.scrollWidth <= container.clientWidth) return;

      const scroll = () => {
        container.scrollLeft += direction * speed;

        if (
          direction > 0 &&
          container.scrollLeft >= container.scrollWidth - container.clientWidth
        ) {
          container.scrollLeft = 0;
        } else if (direction < 0 && container.scrollLeft <= 0) {
          container.scrollLeft = container.scrollWidth;
        }

        return requestAnimationFrame(scroll);
      };

      return scroll();
    };

    animationFrameId1 = setupSmoothScroll(row1Ref, 1, 0.5);
    animationFrameId2 = setupSmoothScroll(row2Ref, -1, 0.5);

    return () => {
      cancelAnimationFrame(animationFrameId1);
      cancelAnimationFrame(animationFrameId2);
    };
  }, []);

  const cardClass =
    "min-w-[260px] sm:min-w-[320px] md:min-w-[360px] h-[200px] sm:h-[260px] md:h-[300px] rounded-2xl overflow-hidden shadow-md flex-shrink-0";

  const fullRow = [...baseProjects, ...baseProjects, ...baseProjects, ...baseProjects];

  const scrollStyles = {
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    WebkitOverflowScrolling: "touch",
  };

  const renderRow = (rowData, ref, keyPrefix) => (
    <div
      ref={ref}
      className="flex gap-6 overflow-x-auto px-4 md:px-10 lg:px-20 py-5 select-none md:touch-none"
      style={scrollStyles}
    >
      {rowData.map((proj, i) => (
        <motion.div
          key={`${keyPrefix}-${i}`}
          className={cardClass}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <img
            src={proj.image}
            alt={`Project ${proj.id}`}
            className="md:w-100 w-70 md:h-100 h-50 object-cover"
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  );

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-8 md:py-12 bg-[#fbfbfb] text-black">
      {/* Header with desktop button */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-widest font-semibold text-[#000000] mb-1">
            Projects
          </p>
          <h2 className="text-3xl text-[#002bba] sm:text-4xl md:text-5xl font-roboto font-semibold leading-tight max-w-xl">
            Captivate your audience’s <span>senses, non-stop</span>
          </h2>
        </div>
        <div className="hidden md:flex">
          <button className="border border-[#002bba] px-5 py-2 rounded-full text-sm hover:bg-[#002bba] hover:text-white transition duration-300">
            View All ↗
          </button>
        </div>
      </div>

      {/* Auto-scrolling rows */}
      {renderRow(fullRow, row1Ref, "row1")}
      {renderRow(fullRow, row2Ref, "row2")}

      {/* Mobile-only button */}
      <div className="md:hidden flex justify-center mt-10">
        <button className="border border-[#002bba] px-5 py-2 rounded-full text-sm hover:bg-[#002bba] hover:text-white transition duration-300">
          View All ↗
        </button>
      </div>
    </section>
  );
};

export default Projects;
