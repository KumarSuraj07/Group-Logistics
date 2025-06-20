import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const services = [
    {
      icon: "🚢",
      title: "Freight Shipping",
      description: "Global ocean and air freight services with competitive rates and reliable delivery."
    },
    {
      icon: "🏭",
      title: "Warehouse Management",
      description: "State-of-the-art storage facilities with inventory management and distribution services."
    },
    {
      icon: "📋",
      title: "Custom Clearance",
      description: "Expert customs brokerage services to ensure smooth international trade operations."
    },
    {
      icon: "🚚",
      title: "Last-Mile Delivery",
      description: "Efficient final delivery solutions to get your goods to their destination on time."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive logistics solutions for your business</p>
        </motion.div>
        
        <div className="relative bg-white rounded-xl shadow-xl mx-auto max-w-5xl p-12">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-center mb-12"
          >
            <motion.div 
              className="text-8xl mb-6"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {services[currentSlide].icon}
            </motion.div>
            <motion.h3 
              className="text-3xl font-bold mb-4 text-primary"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {services[currentSlide].title}
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              {services[currentSlide].description}
            </motion.p>
          </motion.div>
          
          <div className="flex justify-center items-center space-x-8 mb-8">
            <button
              onClick={prevSlide}
              className="border-2 border-primary text-primary w-12 h-12 rounded-full hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center text-xl font-bold"
            >
              ←
            </button>
            
            <div className="flex space-x-3">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="border-2 border-primary text-primary w-12 h-12 rounded-full hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center text-xl font-bold"
            >
              →
            </button>
          </div>
          
          <div className="text-center">
            <motion.button
              onClick={() => window.location.href = '/services'}
              className="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              Know More
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;