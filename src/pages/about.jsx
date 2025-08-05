import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaArrowRight } from "react-icons/fa"; // install this package if not already: react-icons

const About = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: -40,
      opacity: 100,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-24 px-4 sm:px-6 md:px-20">
      {/* Top Title Section */}
      <div className="text-center mb-10">
        <button className="text-xs tracking-wide border px-3 py-1 rounded-full mb-10">
          ABOUT
        </button>

        <h1
          ref={titleRef}
          className="text-4xl sm:text-7xl font-extrabold text-blue-700 leading-tight"
        >
          WE'RE ALL <br className="hidden sm:block" /> ABOUT DIGITAL
        </h1>

        {/* Custom Button */}
        <div className="flex justify-center -mt-5">
          <button className="group flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300">
            let’s talk
            <span className="ml-3 bg-white text-blue-600 p-2 rounded-full transition-all duration-300 group-hover:translate-x-1">
              <FaArrowRight size={14} />
            </span>
          </button>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="grid md:grid-cols-2 gap-8 items-start mb-14">
        <div>
          <p className="text-sm font-medium">• Our Story</p>
        </div>
        <div>
          <p className="text-lg font-medium font-poppins leading-7">
            Welcome To Texbay, Where Innovation Meets Expertise. As Your
            Creative And Growth Partner, We Specialize In Propelling
            Fast–Growing Brands To New Heights.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mb-14"></div>

      {/* Together Section */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-5xl sm:text-7xl font-roboto font-medium text-blue-700">
            Together We <br /> Are Strong
          </h2>
        </div>
        <div className="space-y-4">
          <p className="text-lg font-semibold font-poppins leading-7">
            Our Crew Is Always Getting Bigger, But We All Work Toward One Goal:
            To Make Sales Success Not Only Possible But Inevitable For Teams
            Everywhere.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            In 2022, At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus
            Qui Blanditiis Praesentium Voluptatum Deleniti Atque Corrupti Quos
            Dolores Et Quas Molestias Excepturi Sint Occaecati Cupiditate Non
            Provident...
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
