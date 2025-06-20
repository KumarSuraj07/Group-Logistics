import React from 'react';
import { motion } from 'framer-motion';

const GroupCompanies = () => {
  const companies = [
    {
      name: 'PaceExpress',
      description: 'Leading express delivery services with nationwide coverage and time-critical logistics solutions.',
      link: 'https://paceexpress.com'
    },
    {
      name: 'Reliable Travels & Cargo Pvt Ltd',
      description: 'Comprehensive travel and cargo services offering reliable transportation solutions across India.',
      link: 'https://reliabletravels.com'
    },
    {
      name: 'Prudential Cargo Services',
      description: 'Specialized cargo handling and freight forwarding services with focus on safety and efficiency.',
      link: 'https://prudentialcargo.com'
    },
    {
      name: 'Titan Logistics Pvt Ltd',
      description: 'Heavy-duty logistics and supply chain management solutions for industrial and commercial sectors.',
      link: 'https://titanlogistics.com'
    }
  ];

  return (
    <section id="companies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Our Group Companies</h2>
          <p className="text-xl text-gray-600">Diverse portfolio of logistics and transportation services</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-primary mb-3">{company.name}</h3>
              <p className="text-gray-600 mb-4">{company.description}</p>
              <a
                href={company.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-blue-700 font-semibold transition-colors"
              >
                Visit Website →
              </a>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <motion.button
            onClick={() => window.location.href = '/companies'}
            className="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            Explore More
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default GroupCompanies;