import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiFilter } from 'react-icons/fi';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive dashboard for e-commerce businesses with analytics, inventory management, and order processing.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tags: ['React', 'Redux', 'Material UI'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      category: 'web'
    },
    {
      id: 2,
      title: 'Travel Companion App',
      description: 'A mobile-first web application for travelers to plan trips, discover attractions, and share experiences.',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80',
      tags: ['React', 'Firebase', 'Google Maps API'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      category: 'mobile'
    },
    {
      id: 3,
      title: 'Task Management System',
      description: 'A collaborative task management platform with real-time updates, task assignment, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
      tags: ['Vue.js', 'Vuex', 'Node.js', 'MongoDB'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      category: 'web'
    },
    {
      id: 4,
      title: 'Fitness Tracker',
      description: 'A fitness application that helps users track workouts, set goals, and monitor progress with visual analytics.',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tags: ['React Native', 'Redux', 'Firebase'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      category: 'mobile'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern portfolio website for a digital artist showcasing their work with a custom-built CMS.',
      image: 'https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tags: ['Next.js', 'Tailwind CSS', 'Sanity.io'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      category: 'web'
    },
    {
      id: 6,
      title: 'Weather App',
      description: 'A weather application with location-based forecasts, interactive maps, and severe weather alerts.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tags: ['React', 'OpenWeather API', 'Styled Components'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      category: 'mobile'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Apps' },
    { value: 'mobile', label: 'Mobile Apps' }
  ];

  return (
    <section id="projects" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">My Projects</h2>
          <p className="max-w-3xl mx-auto text-secondary-600">
            Here are some of my recent projects. Each one was carefully crafted to solve specific problems
            and deliver exceptional user experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex p-1 bg-secondary-100 rounded-lg">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setFilter(category.value)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  filter === category.value
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-secondary-600 hover:text-secondary-900'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white text-secondary-900 p-2 rounded-full hover:bg-primary-600 hover:text-white transition-colors"
                      >
                        <FiExternalLink size={18} />
                      </a>
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white text-secondary-900 p-2 rounded-full hover:bg-primary-600 hover:text-white transition-colors"
                      >
                        <FiGithub size={18} />
                      </a>
                    </div>
                    <div className="bg-primary-600 text-white text-xs px-2 py-1 rounded">
                      {project.category === 'web' ? 'Web App' : 'Mobile App'}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-2">{project.title}</h3>
                <p className="text-secondary-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs bg-secondary-100 text-secondary-700 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;