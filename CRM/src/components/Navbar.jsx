import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiCommand } from 'react-icons/fi';
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
            <FiCommand className="h-6 w-6 text-gray-800" />
            <span className="text-xl font-bold text-gray-800">SampleCRM</span>
          </Link>

          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            {Object.keys(navContent).map((key) => (
              <div key={key} onMouseEnter={() => handleMouseEnter(key)} className="relative py-5">
                <span className="flex items-center cursor-pointer hover:text-black transition-colors">
                  {navContent[key].title}
                  <motion.div animate={{ rotate: activeMenu === key ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <FiChevronDown className="ml-1 h-4 w-4" />
                  </motion.div>
                </span>
              </div>
            ))}
            <Link to="/pricing" className="hover:text-black transition-colors py-5">Pricing</Link>
          </div>
        </div>

        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute mt-2 w-[450px] bg-white/70 backdrop-blur-md shadow-lg rounded-xl border border-white/30 overflow-hidden"
            >
              <div className="p-6 grid grid-cols-1 gap-6">
                {navContent[activeMenu].links.map((link) => (
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