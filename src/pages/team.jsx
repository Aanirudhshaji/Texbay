import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";

const teamMembers = [
  {
    img: person1,
    name: "Edwin Andrews",
    role: "Chief Executive Officer",
    linkedin: "https://www.linkedin.com/in/edwinandrews",
  },
  {
    img: person2,
    name: "Irene Joseph",
    role: "Vice President",
    linkedin: "https://www.linkedin.com/in/irenejoseph",
  },
];

const Team = () => {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-16 bg-[#fbfbfb]">
      {/* Section Heading */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-roboto font-semibold text-[#002bba] mb-4">
          Leadership Team
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          At Texbay, our Leadership team is driven by a genuine passion and deep
          expertise to help you realise your digital potential. They are
          dedicated, skilled, and ready to guide you through every challenge to
          deliver exceptional outcomes.
        </p>
      </div>

      {/* Team Members */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 justify-center">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            {/* Image with LinkedIn */}
            <div className="relative w-60 h-72 overflow-hidden">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover grayscale"
              />
              {/* LinkedIn Icon */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow hover:bg-[#0077b5] hover:text-white transition"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>

            {/* Name & Role */}
            <div className="mt-4">
              <h3 className="text-lg font-medium text-black">
                {member.name}
              </h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
