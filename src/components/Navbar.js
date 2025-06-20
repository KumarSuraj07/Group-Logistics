import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item) => {
    if (item === 'Home') {
      navigate('/');
    } else if (item === 'About') {
      navigate('/about');
    } else if (item === 'Services') {
      navigate('/services');
    } else if (item === 'Group Companies') {
      navigate('/companies');
    } else if (location.pathname === '/') {
      // If on home page, scroll to section
      document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If on other page, go to home then scroll
      navigate('/');
      setTimeout(() => {
        document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className={`text-2xl font-bold cursor-pointer ${isScrolled ? 'text-primary' : 'text-white'}`}
            onClick={() => navigate('/')}
          >
            Group Logistics
          </div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Services', 'Group Companies', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`relative hover:text-secondary transition-colors duration-300 pb-1 group ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;