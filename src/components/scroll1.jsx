import React from "react";
import bgVideo from "../assets/scroll.mp4";
import { motion } from "framer-motion";

// Animation variant for heading and paragraph
const fadeZoomUp = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: [0.25, 0.8, 0.25, 1],
    },
  }),
};

const Scroll1 = () => {
  return (
    <section className="relative w-full h-[85vh] sm:h-[90vh] md:h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
        loading="lazy"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 text-center">
        <div className="max-w-4xl text-white space-y-6">
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl font-light leading-tight font-roboto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeZoomUp}
            custom={1}
          >
            White-label mortgage<br />software to fit your needs
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl font-medium"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeZoomUp}
            custom={2}
          >
            Oper's digital solution integrates seamlessly with your core banking <br /> to provide a coherent user experience
          </motion.p>

          {/* Static button, no animation */}
          <button
            className="mt-4 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base rounded-full backdrop-blur-md bg-white/10 border border-white/30 text-white font-semibold shadow-lg hover:bg-white/20 transition duration-300"
          >
            Let’s Collaborate
          </button>

        </div>
      </div>
    </section>
  );
};

export default Scroll1;
