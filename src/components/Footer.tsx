import React from 'react';
import { FaFacebook, FaPinterest, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-white">SKYHIT MEDIA</h2>
          <p className="mt-4">
            Committed to driving your business growth. Connect with us for
            innovative digital marketing solutions.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaTwitter className="text-2xl hover:text-white cursor-pointer" />
            <FaFacebook className="text-2xl hover:text-white cursor-pointer" />
            <FaPinterest className="text-2xl hover:text-white cursor-pointer" />
            <FaEnvelope className="text-2xl hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-white mb-2">Explore</h3>
            <ul className="space-y-1">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Service</li>
              <li className="hover:text-white cursor-pointer">Project</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">Services</h3>
            <ul className="space-y-1">
              <li className="hover:text-white cursor-pointer">
                Website Design & Development
              </li>
              <li className="hover:text-white cursor-pointer">Website Development</li>
              <li className="hover:text-white cursor-pointer">Mobile Development</li>
              <li className="hover:text-white cursor-pointer">
                Social Media Marketing
              </li>
              <li className="hover:text-white cursor-pointer">Digital Marketing</li>
              <li className="hover:text-white cursor-pointer">Growth Strategy</li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-semibold text-white mb-2">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="material-icons">place</span>
              <p className="ml-2">
                3rd Floor, Door No:301 Vipra Elite, Prtrika Nagar, street No:1,
                Madhapur, Hyderabad, Telangana 500081
              </p>
            </li>
            <li className="flex items-center">
              <span className="material-icons">phone</span>
              <p className="ml-2">+91 9030279661</p>
            </li>
            <li className="flex items-center">
              <span className="material-icons">email</span>
              <p className="ml-2">contact@skyhitmedia.com</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 text-gray-500 text-sm">
        © Copyright 2024 | All Rights Reserved SKYHIT MEDIA
      </div>
    </footer>
  );
};

export default Footer;
