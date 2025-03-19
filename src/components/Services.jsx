import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Home, Building2, Warehouse, PaintBucket, Ruler, Hammer, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "Custom homes and residential projects built to your specifications with premium quality.",
    color: "from-amber-400 to-amber-500"
  },
  {
    icon: Building2,
    title: "Commercial Buildings",
    description: "Modern commercial spaces designed for functionality and aesthetic appeal.",
    color: "from-amber-500 to-amber-600"
  },
  {
    icon: Warehouse,
    title: "Industrial Construction",
    description: "Large-scale industrial facilities with focus on efficiency and durability.",
    color: "from-amber-400 to-amber-500"
  },
  {
    icon: PaintBucket,
    title: "Interior Finishing",
    description: "Premium interior finishing services to perfect every detail of your space.",
    color: "from-amber-500 to-amber-600"
  },
  {
    icon: Ruler,
    title: "Architecture & Design",
    description: "Comprehensive architectural design services for your construction projects.",
    color: "from-amber-400 to-amber-500"
  },
  {
    icon: Hammer,
    title: "Renovation",
    description: "Expert renovation services to transform and modernize existing structures.",
    color: "from-amber-500 to-amber-600"
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-navy-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-30"></div>
      <div className="absolute -right-20 top-40 w-80 h-80 rounded-full border border-amber-400/10 -z-10"></div>
      <div className="absolute -left-20 bottom-40 w-80 h-80 rounded-full border border-amber-400/10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block mb-3"
          >
            <span className="px-4 py-1 bg-navy-800 text-amber-400 rounded-full text-sm font-medium border border-amber-500/30">
              What We Offer
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-navy-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our <span className="text-amber-500">Premium</span> Services
          </motion.h2>
          
          <motion.p 
            className="text-xl text-navy-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive construction solutions tailored to exceed your expectations
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group border border-gray-100 hover:border-amber-200"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="p-8">
                <div className="mb-6 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-full opacity-10 transform scale-150 group-hover:scale-[2] transition-transform duration-500`}></div>
                  <div className={`relative w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${service.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {React.createElement(service.icon, { className: "w-8 h-8" })}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-navy-800 group-hover:text-amber-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-navy-600 mb-6 group-hover:text-navy-700 transition-colors duration-300">
                  {service.description}
                </p>
                
                <div className="flex items-center text-amber-500 font-medium group-hover:text-amber-600 transition-colors duration-300">
                  <span className="mr-2">Learn more</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
              
              <div className="h-1 w-0 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section */}
        <motion.div 
          className="mt-20 bg-navy-800 rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-amber-400/20 to-transparent rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-amber-400/10 to-transparent rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to start your project?</h3>
              <p className="text-gray-300 max-w-xl">Contact us today for a free consultation and estimate on your construction needs.</p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-navy-900 rounded-full font-semibold flex items-center shadow-lg transition-all duration-300 whitespace-nowrap"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;