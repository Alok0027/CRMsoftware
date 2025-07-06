import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import { ChartPie } from 'lucide-react';
import { navContent } from './NavContent.jsx';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div className="fixed top-6 w-full px-6 flex items-start justify-between z-50 pointer-events-none">
      {/* Left Panel */}
      <div className="pointer-events-auto" onMouseLeave={handleMouseLeave}>
        <div className="h-16 bg-white/70 backdrop-blur-md shadow-lg border border-white/30 rounded-xl px-6 flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-2">
            <ChartPie className="h-6 w-6 text-gray-800" />
            <span className="text-xl font-bold text-gray-800">SampleCRM</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {Object.keys(navContent).map((key) => (
              <div key={key} className="relative" onMouseEnter={() => handleMouseEnter(key)} onMouseLeave={handleMouseLeave}>
                <span className="flex items-center cursor-pointer text-gray-600 hover:text-primary py-4">
                  {navContent[key].title}
                  <motion.div animate={{ rotate: activeMenu === key ? 180 : 0 }}>
                    <FiChevronDown className="w-5 h-5 ml-1" />
                  </motion.div>
                </span>
                <AnimatePresence>
                  {activeMenu === key && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 z-10 mt-2 w-[450px] bg-white/95 backdrop-blur-md shadow-lg rounded-xl border border-white/30 overflow-hidden"
                    >
                      <div className="p-6 grid grid-cols-1 gap-6">
                        {navContent[key].links.map((link) => (
                          <Link to={link.path} key={link.name} className="flex items-start space-x-4 group p-2 rounded-lg hover:bg-gray-50/50 transition-colors">
                            <div className="p-2 bg-gray-100 rounded-md group-hover:bg-orange-100 transition-colors">
                              {React.cloneElement(link.icon, { className: 'h-6 w-6 text-gray-600 group-hover:text-orange-500 transition-colors' })}
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">{link.name}</h3>
                              <p className="text-sm text-gray-500">{link.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <Link to="/pricing" className="text-gray-600 hover:text-primary py-4">Pricing</Link>
          </nav>
        </div>
      </div>

      {/* Right Panel */}
      <div className="pointer-events-auto">
        <div className="h-16 bg-white/70 backdrop-blur-md shadow-lg border border-white/30 rounded-xl px-6 flex items-center space-x-4">
          <Link to="/login">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-800 font-medium px-4 py-1.5 rounded-md border-4 border-double border-gray-300"
            >
              Log in
            </motion.button>
          </Link>
          <Link to="/signup">
            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-4 py-1.5 rounded-md font-medium hover:bg-gray-800 transition-colors"
            >
              Get SampleCRM free
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;