import React from 'react';
import { motion } from 'framer-motion';
import {
  FiCode,
  FiDatabase,
  FiLayers,
  FiTool
} from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      icon: <FiCode />,
      title: 'Frontend',
      skills: [
        { name: 'React', level: 100 },
        { name: 'React Native', level: 100 },
        { name: 'iOS/Swift', level: 85 },
        { name: 'Android/Kotlin', level: 85 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3/SASS', level: 90 },
        { name: 'JavaScript (ES6+)', level: 92 },
        { name: 'TypeScript', level: 95 },
      ]
    },
    {
      icon: <FiLayers />,
      title: 'UI Frameworks',
      skills: [
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Material UI', level: 85 },
        { name: 'Native Base', level: 95 },
        { name: 'GlueStack UI', level: 95 },
        { name: 'Bootstrap', level: 90 },
        { name: 'Styled Components', level: 88 },
      ]
    },
    {
      icon: <FiDatabase />,
      title: 'Backend & APIs',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'GraphQL', level: 90 },
        { name: 'Firebase', level: 85 },
      ]
    },
    {
      icon: <FiTool />,
      title: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Webpack/Vite', level: 95 },
        { name: 'Jest/Testing Library', level: 80 },
        { name: 'Figma/Adobe XD', level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="section bg-secondary-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">My Skills</h2>
          <p className="max-w-3xl mx-auto text-secondary-600">
            I've worked with a variety of technologies and tools throughout my career.
            Here's an overview of my technical expertise and proficiency levels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-6">
                <div className="text-primary-600 text-2xl mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-secondary-700">{skill.name}</span>
                      <span className="text-sm font-medium text-secondary-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                        className="h-2.5 rounded-full bg-primary-600"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;