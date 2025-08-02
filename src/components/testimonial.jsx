import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BsSoundwave } from "react-icons/bs";

// Import your images here
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import p7 from "../assets/p7.jpg";

const testimonials = [
  {
    id: 1,
    name: "Zahra Aziz",
    text:
      "Wow! What an amazing journey, ExploreEase made travel a breeze. Their super friendly team handled every detail, so all I had to do was relax and explore.",
    image: p1,
  },
  {
    id: 2,
    name: "Aarav Mehta",
    text: "ExploreEase took care of everything! It felt effortless and exciting.",
    image: p2,
  },
  {
    id: 3,
    name: "Sofia Riley",
    text: "From planning to execution, it was smooth sailing all the way.",
    image: p3,
  },
  {
    id: 4,
    name: "Zahra Aziz",
    text: "Amazing team, beautiful experience, unforgettable memories.",
    image: p4,
  },
  {
    id: 5,
    name: "Daniel Costa",
    text: "ExploreEase is my go-to for planning every trip now!",
    image: p5,
  },
  {
    id: 6,
    name: "Amaya Liu",
    text: "The entire trip felt magical thanks to the ExploreEase team.",
    image: p6,
  },
  {
    id: 7,
    name: "Leo Tanaka",
    text: "I never imagined travel could be so stress-free.",
    image: p7,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [speaking, setSpeaking] = useState(false);
  const [indianVoice, setIndianVoice] = useState(null);

  const current = testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleVoice = () => {
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(current.text);
      if (indianVoice) {
        utterance.voice = indianVoice;
      }
      utterance.onend = () => setSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setSpeaking(true);
    }
  };

  useEffect(() => {
    window.speechSynthesis.cancel(); // Stop speech when switching
    setSpeaking(false);
  }, [currentIndex]);

  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      const found = voices.find(
        (voice) =>
          voice.lang === "en-IN" ||
          voice.lang === "hi-IN" ||
          voice.name.toLowerCase().includes("india")
      );
      if (found) {
        setIndianVoice(found);
      }
    };

    loadVoices();

    // In case voices aren't loaded yet
    window.speechSynthesis.onvoiceschanged = () => {
      loadVoices();
    };
  }, []);

  return (
    <section className="w-full bg-[ffffff] py-10 px-4 md:px-10 text-center">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="inline-block px-4 py-1 text-[#002bba] text-sm font-medium">
          Testimonials
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-relaxed">
          {current.text}
        </h2>

        <BsSoundwave className="mx-auto text-3xl text-gray-500" />

        <div className="flex justify-center items-center gap-4 overflow-hidden">
          {testimonials.map((item, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={item.id}
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                  isActive
                    ? "w-28 h-28 md:w-36 md:h-36 shadow-lg scale-110 border-2 border-purple-300"
                    : "w-20 h-20 md:w-24 md:h-24 opacity-30"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>

        <h3 className="text-xl font-semibold text-[#002bba]">
          {current.name}
        </h3>

        <div className="flex justify-center items-center gap-4 mt-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-white shadow hover:bg-gray-100 flex items-center justify-center"
          >
            <FiChevronLeft className="text-xl" />
          </button>

          <button
            onClick={handleVoice}
            className={`w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center ${
              speaking ? "bg-purple-100 border-purple-400" : "bg-white"
            }`}
          >
            {speaking ? "⏹" : "▶️"}
          </button>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-white shadow hover:bg-gray-100 flex items-center justify-center"
          >
            <FiChevronRight className="text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
