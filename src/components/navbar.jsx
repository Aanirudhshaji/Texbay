import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/work' },
    { name: 'Career', path: '/career' },
    { name: 'Insights', path: '/insights' },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 flex justify-center px-4 py-3">
      <div className="w-full max-w-6xl rounded-[15px] backdrop-blur-md bg-white/20 border border-white/30 shadow-lg flex items-center justify-between px-6 py-2">
        
        {/* Logo */}
        <div className="text-white text-2xl md:text-3xl font-bold">
         <span className="text-black">Texbay</span> 
         <span className="text-blue-500">.</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-black font-medium">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className={`px-4 py-2 rounded-full transition-all ${
                  location.pathname === path
                    ? 'bg-white text-black shadow-sm'
                    : 'hover:text-gray-700'
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="hidden md:block bg-white text-black hover:text-white px-5 py-2 rounded-xl font-medium shadow hover:bg-[#002bba] transition"
        >
          Contact us
        </Link>

        {/* Mobile Toggle */}
        <div className="md:hidden text-2xl text-black" onClick={toggleMenu}>
          {isOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full mt-2 w-full max-w-6xl bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-4 md:hidden">
          <ul className="flex flex-col gap-3 text-black font-medium">
            {navLinks.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full px-4 py-2 rounded-full ${
                    location.pathname === path ? 'bg-gray-200' : 'hover:bg-gray-100'
                  }`}
                >
                  {name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-black text-white py-2 rounded-xl hover:bg-gray-900 transition"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
