import React from "react";
import { motion } from "framer-motion";
import { FiFeather } from "react-icons/fi";
import brandingIcon from "../assets/design.gif";
import designIcon from "../assets/develop.gif";
import devIcon from "../assets/market.gif";
import centerVideo from "../assets/b.mp4"; // replace with your video file

const About = () => {
  const services = [
    {
      id: 1,
      icon: brandingIcon,
      title: "DESIGN",
      desc: "Our expert design team in Kannur, Kerala creates visually stunning, user-friendly websites, logos, and brand assets that capture your audience’s attention and reflect your unique identity.",
    },
    {
      id: 2,
      icon: designIcon,
      title: "DEVELOP",
      desc: "We build fast, secure, and SEO-optimized websites in Kannur that work seamlessly across devices, helping businesses grow their online presence and convert visitors into customers.",
    },
    {
      id: 3,
      icon: devIcon,
      title: "MARKETING",
      desc: "From local SEO and social media management to paid advertising, our marketing services in Kannur help you reach the right audience, boost engagement, and drive measurable growth.",
    },
  ];

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-8 md:py-12 bg-[#fbfbfb] relative">
      <div className="max-w-7xl mx-auto">

        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-4 bg-[#002bba] text-white text-xs font-semibold px-3 py-2 rounded-full"
        >
          THE ATTENTION ECONOMY
          <FiFeather className="w-4 h-4" />
        </motion.div>
        
        {/* Heading */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl md:text-5xl font-bold uppercase text-black leading-tight">
            Texbay Digital Marketing <br /> Agency in Kannur, Kerala
          </h2>
        </div>

        {/* Subtitle */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl font-bold text-gray-400 leading-tight mb-10 mt-4"
        >
          Creative, Innovative, and Locally Tailored <br /> Marketing & Web Design Solutions
        </motion.h3>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="border-2 border-[#002bba] text-black p-8 rounded-md flex flex-col items-start min-h-[320px] hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-20 md:w-20 md:h-20 h-20 mb-6"
              />
              <h4 className="text-4xl md:text-4xl font-bold font-roboto mb-5 md:mb-10">
                {service.title}
              </h4>
              <p className="text-lg leading-relaxed font-poppins mt-1 md:mt-2">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Simple Button */}
        <div className="md:hidden mt-8 w-full flex justify-center">
          <button className="bg-[#002bba] hover:bg-[#001f88] text-white font-medium px-6 py-2 rounded-full transition-all duration-300">
            Know More
          </button>
        </div>
      </div>

      {/* Desktop Rotating Video Button */}
      <div className="hidden md:block absolute top-10 right-14 z-20">
        <div className="relative w-[120px] h-[120px]">
          
          {/* Rotating Text */}
          <div className="absolute inset-0 spin-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50
                    m -35, 0
                    a 35,35 0 1,1 70,0
                    a 35,35 0 1,1 -70,0"
                />
              </defs>
              <text
                fontSize="9"
                fill="black"
                fontWeight="bold"
                fontFamily="sans-serif"
              >
                <textPath xlinkHref="#circlePath" startOffset="0%">
                  • GET IN TOUCH • GET IN TOUCH • GET IN TOUCH
                </textPath>
              </text>
            </svg>
          </div>

          {/* Center Video */}
          <div className="absolute inset-0 flex items-center justify-center">
            <video
              src={centerVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-[70px] h-[70px] rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Tailwind custom keyframes */}
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .spin-slow {
            animation: spin 12s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default About;

