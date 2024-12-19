"use client";

import React, { useState } from "react";
import { FiSearch, FiMenu, FiX, FiPhone } from "react-icons/fi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="bg-[#5F6B70E5] shadow-md fixed w-full z-50"
      style={{
        backgroundImage:
          'url("https://skyhitmedia.com/images/header-pattern.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto flex justify-between items-center py-6 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <a href="/" className="flex items-center">
            <img
              src="https://skyhitmedia.com/images/header-skyhit-logo-desktop.png"
              alt="Skyhit Media Logo"
              className="h-16"
            />
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-white lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Navigation */}
        <nav
          className={`lg:flex space-x-6 items-center absolute lg:relative lg:top-auto lg:left-auto top-16 left-0 w-full lg:w-auto bg-gray-100 lg:bg-transparent lg:translate-x-0 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out lg:transition-none`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 gap-8">
            <li>
              <a
                href="#"
                className="text-orange-500 text-xl font-medium px-6 py-2 lg:p-0"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-orange-500 text-white text-xl px-6 py-2 lg:p-0"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-orange-500 text-white text-xl px-6 py-2 lg:p-0"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-orange-500 text-white text-xl px-6 py-2 lg:p-0"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#blogs"
                className="hover:text-orange-500 text-white text-xl px-6 py-2 lg:p-0"
              >
                Blogs
              </a>
            </li>
          </ul>
        </nav>

        {/* Right Section */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Call Helpline */}
          <div className="flex items-center text-sm text-gray-600 space-x-2">
            <FiPhone size={42} className="text-orange-500" /> {/* Call Icon */}
            <div>
              <span className="font-semibold text-white text-lg">
                Connect with us
              </span>
              <br />
              <span className="text-2xl text-white">+91 9030 279 661</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
