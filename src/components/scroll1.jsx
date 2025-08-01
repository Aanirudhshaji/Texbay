import React from "react";
import bgVideo from "../assets/scroll.mp4";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
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
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 text-center">
        <div className="max-w-4xl text-white space-y-6">
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl font-light leading-tight font-roboto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            White-label mortgage<br />software to fit your needs
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl font-medium"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
          >
            Oper's digital solution integrates seamlessly with your core banking to provide a coherent user experience
          </motion.p>

          <motion.button
            className="mt-4 px-6 py-3 rounded-full backdrop-blur-md bg-white/10 border border-white/30 text-white font-semibold shadow-lg hover:bg-white/20 transition duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
          >
            Let’s Collaborate
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Scroll1;
