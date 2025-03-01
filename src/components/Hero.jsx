import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import ProfileImage from '../../assets/profile.jpeg'
import { FiArrowDown, FiGithub, FiLinkedin } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 leading-tight">
              <span className="block">Hi, I'm</span>
              <span className="text-primary-600">Chathu Abeywickrama</span>
            </h1>
            <h2 className="mt-4 text-xl md:text-2xl text-secondary-600 font-light">
              Senior Frontend Developer & UI/UX Enthusiast
            </h2>
            <p className="mt-6 text-secondary-700 max-w-lg mx-auto lg:mx-0">
              I build exceptional digital experiences with modern technologies.
              Specializing in creating responsive, accessible, and performant web and mobile applications.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* <Link to="projects" smooth={true} duration={500} offset={-70}>
                <button className="btn btn-primary">
                  View My Work
                </button>
              </Link> */}
              <Link to="contact" smooth={true} duration={500} offset={-70}>
                <button className="btn btn-secondary">
                  Contact Me
                </button>
              </Link>
            </div>
            <div className="mt-8 flex justify-center lg:justify-start space-x-6">
              <a href="https://github.com/KeRusty" target="_blank" rel="noopener noreferrer" className="text-secondary-600 hover:text-primary-600 transition-colors">
                <FiGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/chathu-abeywickrama/" target="_blank" rel="noopener noreferrer" className="text-secondary-600 hover:text-primary-600 transition-colors">
                <FiLinkedin size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-lg">
              <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center overflow-hidden">
                <img
                  src={ProfileImage}
                  alt="Chathu Abeywickrama"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <Link to="about" smooth={true} duration={500} offset={-70} className="cursor-pointer">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center"
            >
              <span className="text-secondary-600 mb-2">Scroll Down</span>
              <FiArrowDown className="text-primary-600" size={24} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;