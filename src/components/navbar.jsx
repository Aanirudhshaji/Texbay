import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/20 px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-5xl font-bold">
          Texbay<span className="text-blue-500">.</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white">
          <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
          <li><Link to="/services" className="hover:text-blue-400 transition">Services</Link></li>
          <li><Link to="/portfolio" className="hover:text-blue-400 transition">Portfolio</Link></li>
          <li>
            <Link to="/contact" className="relative group rounded-full px-6 py-2 overflow-hidden text-white border-2 border-white transition duration-300 hover:text-blue-600">
              <span className="absolute inset-0 bg-white rounded-full transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              <span className="relative z-10">Contact</span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out transform ${
          isOpen ? "opacity-100 scale-100 mt-4" : "opacity-0 scale-95 hidden"
        } bg-white/80 backdrop-blur-md text-black rounded-lg shadow-lg px-4 py-4`}
      >
        <ul className="flex flex-col gap-4">
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-500">About Us</Link></li>
          <li><Link to="/services" className="hover:text-blue-500">Services</Link></li>
          <li><Link to="/portfolio" className="hover:text-blue-500">Portfolio</Link></li>
          <li>
            <Link to="/contact" className="relative group w-full text-center rounded-full px-6 py-2 overflow-hidden text-blue-600 border-2 border-blue-600 transition duration-300 hover:text-white">
              <span className="absolute inset-0 bg-blue-600 rounded-full transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              <span className="relative z-10">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
