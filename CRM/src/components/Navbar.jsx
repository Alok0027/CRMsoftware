import React from 'react';
import { motion } from "framer-motion"; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl h-16 
                    bg-white/70 backdrop-blur-md shadow-lg border border-white/30 
                    rounded-xl px-6 flex items-center justify-between">
      {}
      <span className="text-xl font-bold text-gray-800">SampleCRM</span>

      {}
      <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <span>Solutions</span>
        <span>Platform</span>
        <span>Support</span>
        <span>Pricing</span>
      </div>

      {}
      <div className="flex space-x-4">
        <Link to="/login">
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="relative text-gray-800 font-medium px-4 py-1.5 rounded-md border border-gray-700 before:content-[''] before:absolute before:inset-0 before:rounded-md before:border before:border-gray-400 before:-z-10 before:translate-x-1 before:translate-y-1"
  >
    Login
  </motion.button>
</Link>
        <button className="bg-black text-white px-4 py-1.5 rounded-md font-medium hover:bg-gray-900 transition">
          Get started
        </button>
      </div>
    </div>
  )
}

export default Navbar