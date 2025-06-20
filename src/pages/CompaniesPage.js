import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const CompaniesPage = () => {
  const companies = [
    {
      name: 'PaceExpress',
      description: 'Leading express delivery services with nationwide coverage and time-critical logistics solutions. We specialize in same-day and next-day delivery services across major cities.',
      services: ['Express Delivery', 'Same-Day Service', 'Document Courier', 'E-commerce Logistics'],
      // link: 'https://paceexpress.com',
      image: 'https://www.grouplogistics.net/wp-content/uploads/2022/08/Pacexpress.jpg'
    },
    {
      name: 'Reliable Travels & Cargo Pvt Ltd',
      description: 'Comprehensive travel and cargo services offering reliable transportation solutions across India. Combining passenger transport with efficient cargo handling services.',
      services: ['Passenger Transport', 'Cargo Services', 'Interstate Travel', 'Freight Forwarding'],
      // link: 'https://reliabletravels.com',
      image: 'https://www.grouplogistics.net/wp-content/uploads/2022/08/reliable.jpg'
    },
    {
      name: 'Prudential Cargo Services',
      description: 'Specialized cargo handling and freight forwarding services with focus on safety and efficiency. Expert handling of sensitive and high-value shipments.',
      services: ['Freight Forwarding', 'Cargo Insurance', 'Warehousing', 'Custom Clearance'],
      // link: 'https://prudentialcargo.com',
      image: 'https://www.grouplogistics.net/wp-content/uploads/2022/08/Predentiosl.jpg'
    },
    {
      name: 'Titan Logistics Pvt Ltd',
      description: 'Heavy-duty logistics and supply chain management solutions for industrial and commercial sectors. Specialized in handling oversized and heavy machinery transportation.',
      services: ['Heavy Machinery Transport', 'Industrial Logistics', 'Project Cargo', 'Supply Chain Management'],
      // link: 'https://titanlogistics.com',
      image: 'https://www.grouplogistics.net/wp-content/uploads/2022/08/riti.png'
    }
  ];

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-primary to-blue-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-white mb-4"
          >
            Our Group Companies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white"
          >
            Diverse Portfolio of Logistics and Transportation Excellence
          </motion.p>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-6 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h2 className="text-3xl font-bold text-primary mb-4">{company.name}</h2>
                  <p className="text-lg text-gray-600 mb-6">{company.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Services:</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {company.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          <span className="text-gray-600">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <a
                    href={company.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Visit Website
                  </a>
                </div>
                
                <div className={`flex ${index % 2 === 1 ? 'lg:col-start-1 justify-center' : 'justify-center'}`}>
                  <img
                    src={company.image}
                    alt={company.name}
                    className="w-64 h-64 object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Group Logistics</h3>
              <p className="text-gray-300">Global logistics solutions for modern businesses.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Delhi Office</h4>
              <div className="space-y-1 text-gray-300 text-sm">
                <p>Khasra No. 1027/1, 2nd Floor</p>
                <p>Plot No. 29, Near Om Palace Hotel</p>
                <p>Road No. 6, Mahipalpur Extn.</p>
                <p>National Highway-8</p>
                <p>New Delhi-110037, India</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact Details</h4>
              <div className="space-y-1 text-gray-300 text-sm">
                <p><strong>Phone:</strong> +91 98100 52096</p>
                <p><strong>Website:</strong> www.grouplogistics.net</p>
                <p><strong>Email:</strong> info@grouplogistics.net</p>
                <p className="mt-2"><strong>Locations:</strong> Delhi | Mumbai | Ludhiana | Moradabad | Bhadohi</p>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-600 pt-6 text-center">
            <p>&copy; 2024 Group Logistics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CompaniesPage;