import React from "react";
import { motion } from "framer-motion";
import { Building2, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-navy-900 text-white relative">
      {/* Top decorative border */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
      
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-amber-400 to-amber-500 p-2 rounded-lg mr-3">
                <Building2 className="h-6 w-6 text-navy-900" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Mudavath <span className="text-amber-400">Constructions</span>
              </span>
            </div>
            
            <p className="text-gray-300 mb-6">
              Building excellence since 2005. We transform visions into landmark realities with precision and quality craftsmanship.
            </p>
            
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="bg-navy-800 hover:bg-amber-500 hover:text-navy-900 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a 
                href="#" 
                className="bg-navy-800 hover:bg-amber-500 hover:text-navy-900 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a 
                href="#" 
                className="bg-navy-800 hover:bg-amber-500 hover:text-navy-900 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter size={18} />
              </motion.a>
              <motion.a 
                href="#" 
                className="bg-navy-800 hover:bg-amber-500 hover:text-navy-900 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={18} />
              </motion.a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-amber-400">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Projects', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2 text-amber-500">›</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-amber-400">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Residential Construction', 
                'Commercial Buildings', 
                'Industrial Construction', 
                'Interior Finishing', 
                'Architecture & Design', 
                'Renovation'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#services"
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2 text-amber-500">›</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-amber-400">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-amber-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Construction Avenue, Building District, City, State 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                <span className="text-gray-300">info@mudavathconstructions.com</span>
              </li>
            </ul>
            
            <div className="mt-6 pt-6 border-t border-navy-700">
              <h4 className="text-sm font-semibold mb-3 text-amber-400">Business Hours</h4>
              <p className="text-gray-300 text-sm">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-gray-300 text-sm">Saturday: 9:00 AM - 4:00 PM</p>
              <p className="text-gray-300 text-sm">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Mudavath Constructions. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-amber-400 transition-colors duration-300">Privacy Policy</a>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-amber-400 transition-colors duration-300">Terms of Service</a>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-amber-400 transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute right-6 -top-6 bg-amber-500 text-navy-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-amber-400 transition-colors duration-300"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowUp size={20} />
      </motion.button>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 border border-amber-500/10 rounded-full opacity-20 hidden lg:block"></div>
      <div className="absolute bottom-40 left-10 w-64 h-64 border border-amber-500/10 rounded-full opacity-20 hidden lg:block"></div>
    </footer>
  );
};

export default Footer;