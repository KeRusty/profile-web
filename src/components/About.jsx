import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiSmartphone, FiAward } from 'react-icons/fi';

const About = () => {
  const features = [
    {
      icon: <FiCode />,
      title: 'Clean Code',
      description: 'I write clean, maintainable code following best practices and industry standards.'
    },
    {
      icon: <FiLayout />,
      title: 'Responsive Design',
      description: 'Creating websites that work flawlessly across all devices and screen sizes.'
    },
    {
      icon: <FiSmartphone />,
      title: 'Modern UI/UX',
      description: 'Designing intuitive user interfaces with great user experience in mind.'
    },
    {
      icon: <FiAward />,
      title: 'Performance Focused',
      description: 'Optimizing applications for maximum speed and scalability.'
    }
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="max-w-3xl mx-auto text-secondary-600">
            I'm a frontend developer with over 8 years of experience crafting sleek, high-performance web and mobile applications. What started as curiosity has evolved into a deep expertise in building seamless digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">My Journey</h3>
            <p className="text-secondary-700 mb-4">
              I started my career as a graphic designer, which gave me a strong foundation in visual aesthetics and user experience principles.
              Transitioning to frontend development allowed me to combine my creative skills with technical expertise.
            </p>
            <p className="text-secondary-700 mb-4">
              Over the years, I've worked with startups and established companies alike, helping them build user-friendly interfaces and
              implement complex frontend architectures. My approach focuses on creating clean, efficient, and maintainable code.
            </p>
            <p className="text-secondary-700">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
              or sharing my knowledge through blog posts and community events.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-secondary-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-primary-600 text-2xl mb-3">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-secondary-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;