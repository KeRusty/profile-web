import React from 'react';
import { Link } from 'react-scroll';
import { FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-primary-400">Dev</span>
              <span className="text-2xl font-bold text-white">Portfolio</span>
            </div>
            <p className="text-secondary-400 mb-6 max-w-md">
              A passionate frontend developer focused on creating intuitive and engaging user experiences
              with modern web technologies.
            </p>
            <p className="text-secondary-400">
              Based in San Francisco, CA
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-secondary-400 hover:text-primary-400 transition-colors cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="text-secondary-400">
                <a href="mailto:alex.johnson@example.com" className="hover:text-primary-400 transition-colors">
                  alex.johnson@example.com
                </a>
              </li>
              <li className="text-secondary-400">
                <a href="tel:+15551234567" className="hover:text-primary-400 transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="text-secondary-400">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                  GitHub
                </a>
              </li>
              <li className="text-secondary-400">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-secondary-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-400 text-sm">
            &copy; {currentYear} Alex Johnson. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-secondary-800 hover:bg-primary-600 text-white p-3 rounded-full transition-colors cursor-pointer inline-block"
            >
              <FiArrowUp size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;