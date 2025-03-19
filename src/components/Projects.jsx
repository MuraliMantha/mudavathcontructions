import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Plus } from "lucide-react";
import port1 from '../assets/port1.jpg';
import port2 from '../assets/port2.jpg';
import port3 from '../assets/port3.jpg';

const projects = [
  {
    title: "Luxury Villa",
    description: "Modern white villa with colonial architecture",
    image: port1,
    category: "Residential",
    year: "2023"
  },
  {
    title: "Swimming Pool",
    description: "Custom-built swimming pool with modern design",
    image: port2,
    category: "Recreational",
    year: "2022"
  },
  {
    title: "Architectural Detail",
    description: "Intricate architectural elements and design",
    image: port3,
    category: "Architecture",
    year: "2023"
  }
];

const categories = ["All", "Residential", "Recreational", "Architecture"];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block mb-3"
          >
            <span className="px-4 py-1 bg-navy-800 text-amber-400 rounded-full text-sm font-medium border border-amber-500/30">
              Our Portfolio
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-navy-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Signature <span className="text-amber-500">Projects</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-navy-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Showcasing our finest work in construction and design excellence
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-navy-800 text-amber-400 shadow-md"
                  : "bg-white text-navy-800 hover:bg-navy-100 border border-navy-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative overflow-hidden rounded-xl shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-w-3 aspect-h-2 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                <div className="p-6 w-full">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-amber-400 text-sm font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 transform translate-y-2 group-hover:translate-y-0">
                        {project.category} • {project.year}
                      </p>
                      <h3 className="text-2xl font-bold text-white mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 transform translate-y-2 group-hover:translate-y-0">
                        {project.title}
                      </h3>
                      <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 transform translate-y-2 group-hover:translate-y-0">
                        {project.description}
                      </p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                      <div className="bg-amber-500 text-navy-900 p-3 rounded-full">
                        <Plus className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card border effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-500/30 rounded-xl transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
        
        {/* View All Projects Button */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-navy-800 text-amber-400 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 border border-amber-500/30"
          >
            <span>View All Projects</span>
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute right-0 top-1/4 w-64 h-64 border border-amber-400/10 rounded-full -z-10 hidden lg:block"></div>
      <div className="absolute left-0 bottom-1/4 w-40 h-40 border border-amber-400/10 rounded-full -z-10 hidden lg:block"></div>
    </section>
  );
};

export default Projects;