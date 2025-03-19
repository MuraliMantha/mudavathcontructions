import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import hero from '../assets/hero.jpg';
import hero2 from '../assets/hero2.jpg';

const Hero = () => {
  const images = [hero, hero2];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Carousel */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 scale-105"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          >
            <div className="absolute inset-0 bg-navy-900 bg-opacity-70"></div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 bg-navy-800/50 hover:bg-navy-800/80 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 border border-amber-400/30"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 bg-navy-800/50 hover:bg-navy-800/80 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 border border-amber-400/30"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 border ${
              index === currentIndex 
                ? "bg-amber-500 border-amber-400 scale-125" 
                : "bg-white/30 border-white/50 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-1 bg-navy-800/80 text-amber-400 rounded-full text-sm font-medium border border-amber-500/30 backdrop-blur-sm">
                Premium Construction Services
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Building <span className="text-amber-400">Dreams</span>,<br />
              Creating <span className="text-amber-400">Landmarks</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Transform your vision into reality with Mudavath Constructions. 
              Excellence in construction, delivered with precision.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-500 hover:bg-amber-600 text-navy-900 px-8 py-4 rounded-full flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg font-semibold border border-amber-400"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white hover:border-amber-400 hover:text-amber-400 text-white px-8 py-4 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <span>Our Projects</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-navy-900/80 to-transparent z-10"></div>
      
      <div className="absolute top-1/4 right-10 w-64 h-64 border border-amber-400/20 rounded-full z-5 hidden lg:block"></div>
      <div className="absolute bottom-1/4 left-10 w-40 h-40 border border-amber-400/20 rounded-full z-5 hidden lg:block"></div>
    </section>
  );
};

export default Hero;