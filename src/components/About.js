import React, { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Company Milestones",
      content: "Founded in 2010, we've grown from a local carrier to a global logistics leader with operations in 50+ countries."
    },
    {
      title: "Key Statistics",
      content: "500+ shipments per day • 99.8% on-time delivery • 10,000+ satisfied customers worldwide"
    },
    {
      title: "Client Testimonials",
      content: "\"Group Logistics transformed our supply chain efficiency. Their reliability is unmatched.\" - Global Manufacturing Corp"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">About Group Logistics</h2>
          <p className="text-xl text-gray-600">Leading the future of global logistics</p>
        </motion.div>
        
        <div className="relative bg-white rounded-lg shadow-lg p-8 overflow-hidden">
          <div className="flex justify-center mb-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full mx-2 transition-all duration-300 ${
                  currentSlide === index ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-center mb-8"
          >
            <motion.h3 
              className="text-2xl font-bold mb-4"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {slides[currentSlide].title}
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {slides[currentSlide].content}
            </motion.p>
          </motion.div>
          
          <div className="text-center">
            <motion.button
              onClick={() => window.open('/about', '_self')}
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

export default About;