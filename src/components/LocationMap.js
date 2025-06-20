import React from 'react';
import { motion } from 'framer-motion';

const LocationMap = () => {
  const locations = [
    { name: 'Mumbai', x: '30%', y: '80%' },
    { name: 'Ludhiana', x: '28%', y: '30%' },
    { name: 'Moradabad', x: '45%', y: '35%' },
    { name: 'Bhadohi', x: '50%', y: '50%' }
  ];

  return (
    <section className="relative py-20">
      <img 
        src='https://images.pexels.com/photos/8828681/pexels-photo-8828681.jpeg'
        alt="Map background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Network</h2>
          <p className="text-xl text-white">Serving major cities across India</p>
        </motion.div>
        
        <div className="relative h-96">

          
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: location.x, top: location.y }}
            >
              <div className="flex flex-col items-center">
                <div className="bg-red-400 text-white p-2 rounded-full mb-2 shadow-lg">
                  📍
                </div>
                <div className="bg-white px-3 py-1 rounded-full shadow-md text-sm font-semibold text-gray-800">
                  {location.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationMap;