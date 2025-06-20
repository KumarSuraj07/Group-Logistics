import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const AboutPage = () => {
  const affiliations = [
    { name: 'WCA World', logo: 'https://www.grouplogistics.net/wp-content/uploads/2022/08/wca.jpg' },
    { name: 'MTO', logo: 'https://www.grouplogistics.net/wp-content/uploads/2022/08/mto.jpg' },
    { name: 'IATA', logo: 'https://www.grouplogistics.net/wp-content/uploads/2022/08/iata.jpg' },
    { name: 'Neutral Air Partner', logo: 'https://www.grouplogistics.net/wp-content/uploads/2022/08/neutral.jpg' },
    { name: 'Elite', logo: 'https://www.grouplogistics.net/wp-content/uploads/2022/08/elite.jpg' },
    { name: 'ISO Certified', logo: 'https://www.grouplogistics.net/wp-content/uploads/2022/08/iso.jpg' },
    { name: 'TIACA', logo: 'https://www.grouplogistics.net/wp-content/uploads/2022/08/tiaca.jpg' }
  ];

  const coreValues = [
    {
      title: 'Passion for customers',
      description: 'We prioritize our customers\'ʼ needs and go above and beyond to exceed their expectations in every interaction.'
    },
    {
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices, building trust with all stakeholders.'
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in all our services and continuously improve our processes and solutions.'
    },
    {
      title: 'Leadership',
      description: 'We lead by example in the logistics industry, setting standards and driving innovation in supply chain solutions.'
    },
    {
      title: 'Team work',
      description: 'We collaborate effectively across all levels and departments to achieve common goals and deliver exceptional results.'
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
            About Group Logistics
          </motion.h1>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Group Logistics, established with a strong commitment to providing high-quality logistics services, has four subsidiaries, which deal in world-class Cargo and Logistics services both in International and Domestic sectors. Driven by core values of integrity and hard work, Group Logistics has mastered the science of global logistics and has built long term, ethical client relationships.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="bg-gradient-to-br from-blue-100 to-gray-100 p-8 rounded-lg">
                <div className="text-8xl text-center">🌍</div>
                <p className="text-center text-gray-600 mt-4">Global Logistics Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading global logistics provider, connecting businesses worldwide through innovative, reliable, and sustainable supply chain solutions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To deliver exceptional logistics services that exceed customer expectations while maintaining the highest standards of integrity, efficiency, and environmental responsibility.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Our Affiliations</h2>
            <p className="text-xl text-gray-600">Trusted partnerships with industry leaders</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {affiliations.map((affiliation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center hover:shadow-lg transition-shadow p-4"
              >
                <img 
                  src={affiliation.logo} 
                  alt={affiliation.name}
                  className="w-32 h-20 object-contain mx-auto mb-2"
                />
                <p className="text-sm font-semibold text-gray-700">{affiliation.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-primary mb-8">Our Core Values</h2>
              <div className="space-y-6">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-l-4 border-primary pl-4"
                  >
                    <h4 className="text-lg font-bold text-primary mb-2">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <img 
                src="https://img.freepik.com/free-vector/two-men-shake-hands-with-each-other-isolated-white-background-meeting-greeting-friends-businessmen-deal-agreement-illustration-partnership-cooperation-communication_575670-2344.jpg?ga=GA1.1.19641525.1735552394&semt=ais_hybrid&w=740"
                alt="Two companies representatives having a friendly business conversation"
                className="w-65 h-65 object-contain mb-4"
              />
              <p className="text-center text-gray-600">Building Strong Partnerships</p>
            </motion.div>
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

export default AboutPage;