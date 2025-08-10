import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person4.jpg";
import person5 from "../assets/person5.jpg";
import person6 from "../assets/person5.jpg";

const teamMembers = [
  {
    img: person1,
    name: "Adam Malik",
    role: "CEO & Co-Founder",
    linkedin: "https://www.linkedin.com/in/adammalik",
  },
  {
    img: person2,
    name: "PJ Appleton",
    role: "COO & Co-Founder",
    linkedin: "https://www.linkedin.com/in/pjappleton",
  },
  {
    img: person3,
    name: "Georgia Green",
    role: "Head of Client Services",
    linkedin: "https://www.linkedin.com/in/georgiagreen",
  },
  {
    img: person4,
    name: "John Smith",
    role: "Lead Developer",
    linkedin: "https://www.linkedin.com/in/johnsmith",
  },
  {
    img: person5,
    name: "Emma Wilson",
    role: "UX/UI Designer",
    linkedin: "https://www.linkedin.com/in/emmawilson",
  },
  {
    img: person6,
    name: "Liam Brown",
    role: "Marketing Specialist",
    linkedin: "https://www.linkedin.com/in/liambrown",
  },
];

const Team = () => {
  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-12 bg-[#fbfbfb]">
      {/* Section 1: Heading */}
      <div className="max-w-7xl mx-auto text-left mb-12">
        <h2 className="text-4xl text-center md:text-left md:text-5xl font-roboto font-bold mb-4 text-[#002bba]">
          Meet Our Team
        </h2>
        <p className="text-gray-600 text-base md:text-lg text-center md:text-left leading-relaxed max-w-xl">
          Meet our team of passionate digital marketing experts, dedicated to
          crafting innovative solutions that fuel success.
        </p>
      </div>

      {/* Section 2: Team Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 items-stretch">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="flex flex-col bg-[#fdfce9] border border-gray-200 h-full"
          >
            {/* Image */}
            <div className="w-full overflow-hidden aspect-[5/5]">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info & LinkedIn */}
            <div className="flex items-center justify-between border-t border-gray-200 flex-grow">
              {/* Text */}
              <div className="p-4">
                <h3 className="text-sm md:text-lg font-semibold text-black">
                  {member.name}
                </h3>
                <p className="text-sm md:text-lg text-gray-500">{member.role}</p>
              </div>

              {/* LinkedIn */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-16 border-l border-gray-200 text-black hover:text-[#0077b5] transition"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
