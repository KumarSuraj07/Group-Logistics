import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const ServicesPage = () => {
  const services = [
    {
      title: 'Pharmaceutical',
      description: 'We are committed to quality driven wide range of Healthcare and Pharma shipments.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Automotive',
      description: 'We provide customised, cost effective, integrated and intermodal automotive logistics solutions.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Consumer Products',
      description: 'Get timely and economical consumer goods logistics solutions with us.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'IT / ITES',
      description: 'With our expertise and knowledge, we help you in driving your IT/ITeS related shipments.',
      image: 'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?ga=GA1.1.19641525.1735552394&semt=ais_hybrid&w=740'
    },
    {
      title: 'Perishables',
      description: 'We ensure you maintain freshness from the point of origin to the destination.',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Packaging',
      description: 'Packaging is an integral part of any efficient supply chain and we adhere to it.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Apparel',
      description: 'We provide apparel shipments worldwide with timely and quality delivery.',
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Machinery & Equipment',
      description: 'We have built up a vast experience and technical ability, allowing us to cautiously and actively handle a range of machinery and equipment.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white"
          >
            Comprehensive Logistics Solutions Across Industries
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
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

export default ServicesPage;