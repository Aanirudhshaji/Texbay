// src/pages/servicescomp/Services.jsx
import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const servicesData = [
    {
      number: "01",
      title: "Brand Design",
      description:
        "Bringing businesses to life with design systems that connect strategy with impactful visuals",
      servicesLeft: ["Brand identity", "Logo design", "Brand Guidelines"],
      servicesRight: ["Branding Kit", "Design System", "Motion Identity"],
      videoSrc:
        "https://res.cloudinary.com/demeflwme/video/upload/v1756286340/original-337e0a1cb7944b9e77633938c0049544_tm1hkm.mp4",
    },
    {
      number: "02",
      title: "Website Development",
      description:
        "A website is your digital business card; encourage people to take action based on your visibility!",
      servicesLeft: ["Web Design", "Web Development", "Figma & Framer"],
      servicesRight: [
        "No-code Development",
        "Responsive Website",
        "Unique identity",
      ],
      videoSrc:
        "https://res.cloudinary.com/demeflwme/video/upload/v1756292551/original-f62a90583df4c3a3382f5171742ddd7e_cv2z4n.mp4",
    },
    {
      number: "03",
      title: "Embedded System",
      description:
        "We build embedded systems that seamlessly integrate hardware and software for high performance and reliability.",
      servicesLeft: ["IoT Devices", "Microcontrollers", "PCB Design"],
      servicesRight: [
        "Firmware Development",
        "System Integration",
        "Testing & Debugging",
      ],
      videoSrc:
        "https://res.cloudinary.com/demeflwme/video/upload/v1756292096/9373131-hd_1920_1080_25fps_wac1qb.mp4",
    },
    {
      number: "04",
      title: "Marketing",
      description:
        "Boost your brand visibility and reach the right audience with our creative marketing strategies.",
      servicesLeft: [
        "Social Media Marketing",
        "SEO Optimization",
        "Content Strategy",
      ],
      servicesRight: ["Campaign Management", "Paid Ads", "Analytics & Reporting"],
      videoSrc:
        "https://res.cloudinary.com/demeflwme/video/upload/v1756290903/9870141d3a43d4fec9a660652ef559ac_x4iqbj.mp4",
    },
  ];

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-8 md:py-12 bg-[#fbfbfb]">
      <div className="max-w-7xl mx-auto relative space-y-16 md:space-y-22">
        {servicesData.map((service, index) => (
          <div
            key={service.number}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-start ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* LEFT: Title, description, services, CTA */}
            <motion.div
              className="flex flex-col justify-start gap-8"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.5,
                type: "spring",
                stiffness: 50,
                damping: 20,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              {/* Number (mobile only) */}
              <div className="block md:hidden">
                <span className="text-4xl font-extrabold text-black">
                  {service.number}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-[40px] md:text-[48px] lg:text-[56px] leading-tight font-bold text-[#002bba]">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-xl md:text-2xl lg:text-[28px] font-semibold text-black max-w-2xl leading-snug">
                {service.description}
              </p>

              {/* Services lists */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
                <ul className="space-y-2 text-lg text-gray-800">
                  {service.servicesLeft.map((s, idx) => (
                    <li
                      key={`l-${service.number}-${idx}`}
                      className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#008CFF]"
                    >
                      {s}
                    </li>
                  ))}
                </ul>

                <ul className="space-y-2 text-lg text-gray-800">
                  {service.servicesRight.map((s, idx) => (
                    <li
                      key={`r-${service.number}-${idx}`}
                      className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#008CFF]"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div>
                <a
                  href="#"
                  className="relative text-[#002bba] font-medium text-lg group"
                >
                  Let’s get to work
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#008CFF] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            </motion.div>

            {/* RIGHT: Video preview + number (desktop only) */}
            <motion.div
              className="flex flex-col items-end w-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              {/* Number (desktop only) */}
              <div className="mb-4 hidden md:block self-end">
                <span className="text-5xl lg:text-6xl font-extrabold text-black">
                  {service.number}
                </span>
              </div>

              {/* Video Card */}
              <motion.div
                className="w-full max-w-[520px] rounded-2xl overflow-hidden shadow-lg bg-black flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <video
                  src={service.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
