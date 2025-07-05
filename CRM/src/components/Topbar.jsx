import React, { useState, useEffect, useRef } from 'react';
import { FiMenu, FiSearch, FiBell, FiSun, FiMoon, FiMail, FiCheckCircle, FiAlertTriangle } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const pseudoNotifications = [
    { id: 1, icon: <FiMail className="text-blue-500" />, text: 'New invoice received' },
    { id: 2, icon: <FiCheckCircle className="text-green-500" />, text: 'Deal "Alpha" closed' },
    { id: 3, icon: <FiAlertTriangle className="text-yellow-500" />, text: 'Task deadline approaching' },
    { id: 4, icon: <FiMail className="text-blue-500" />, text: 'Client meeting at 3 PM' },
    { id: 5, icon: <FiCheckCircle className="text-green-500" />, text: 'New lead from website' },
];

const Topbar = () => {
  const [notifications, setNotifications] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const dropdownRef = useRef(null);

  // Generate and clear notifications
  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications(prev => {
        const nextNotification = pseudoNotifications[Math.floor(Math.random() * pseudoNotifications.length)];
        const newNotification = { ...nextNotification, uniqueId: Date.now() };

        setTimeout(() => {
          setNotifications(current => current.filter(n => n.uniqueId !== newNotification.uniqueId));
        }, 5000);

        return [newNotification, ...prev].slice(0, 5); // Keep max 5 notifications
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Handle clicks outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={`w-full h-16 px-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between shadow-sm sticky top-0 z-50`}>
      {/* Left: CRM Title + Hamburger (for mobile) */}
      <div className="flex items-center gap-4">
        <button className="md:hidden text-gray-600 dark:text-gray-300 text-2xl">
          <FiMenu />
        </button>
        <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">📊 CRM Dashboard</h1>
      </div>

      {/* Right: Search + Actions */}
      <div className="flex items-center gap-4">
        {/* Search bar */}
        <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-700 rounded-md px-3 py-1">
          <FiSearch className="text-gray-500 dark:text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none px-2 text-sm text-gray-700 dark:text-gray-200"
          />
        </div>

        {/* Theme toggle */}
        <button onClick={toggleTheme} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400">
          {theme === 'light' ? <FiMoon className="text-xl" /> : <FiSun className="text-xl" />}
        </button>

        {/* Notifications */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 relative"
          >
            <FiBell className="text-xl" />
            {notifications.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 h-4 w-4 text-xs text-white rounded-full flex items-center justify-center">
                {notifications.length}
              </span>
            )}
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="p-3 border-b dark:border-gray-700">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">Notifications</h4>
                </div>
                <div className="flex flex-col-reverse">
                  <AnimatePresence>
                    {notifications.map(notif => (
                      <motion.div
                        key={notif.uniqueId}
                        layout
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50, transition: { duration: 0.3 } }}
                        className="flex items-center gap-4 p-3 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <span className="text-2xl">{notif.icon}</span>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{notif.text}</p>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  {notifications.length === 0 && (
                      <p className='p-4 text-sm text-gray-500'>No new notifications</p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* User avatar */}
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white font-medium">
          A
        </div>
      </div>
    </header>
  );
};

export default Topbar;