import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import GroupCompanies from '../components/GroupCompanies';
import LocationMap from '../components/LocationMap';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <GroupCompanies />
      <LocationMap />
      <Contact />
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

export default HomePage;