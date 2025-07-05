import React, { useState, useEffect } from 'react';
import { ChartPie } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiHome,
  FiUsers,
  FiBriefcase,
  FiPhone,
  FiCalendar,
  FiBarChart2,
  FiSettings,
  FiLogOut,
  FiMail,
  FiCheckCircle,
  FiAlertTriangle
} from 'react-icons/fi';

const navItems = [
  { name: 'Dashboard', icon: <FiHome />, path: '/dashboard' },
  { name: 'Leads', icon: <FiUsers />, path: '/dashboard/leads' },
  { name: 'Deals', icon: <FiBriefcase />, path: '/dashboard/deals' },
  { name: 'Contacts', icon: <FiPhone />, path: '/dashboard/contacts' },
  { name: 'Tasks', icon: <FiCalendar />, path: '/dashboard/tasks' },
  { name: 'Reports', icon: <FiBarChart2 />, path: '/dashboard/reports' },
  { name: 'Settings', icon: <FiSettings />, path: '/dashboard/settings' }
];

const pseudoNotifications = [
    { id: 1, icon: <FiMail />, text: 'New message from John' },
    { id: 2, icon: <FiCheckCircle />, text: 'Task completed' },
    { id: 3, icon: <FiAlertTriangle />, text: 'High priority lead assigned' },
    { id: 4, icon: <FiMail />, text: 'Follow up with Jane Smith' },
    { id: 5, icon: <FiCheckCircle />, text: 'Deal "Project X" won!' },
  ];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications(currentNotifications => {
        if (currentNotifications.length >= 4) {
          return currentNotifications;
        }
        const nextNotification = pseudoNotifications[currentNotifications.length % pseudoNotifications.length];
        const newNotification = { ...nextNotification, uniqueId: Date.now() };

        setTimeout(() => {
          setNotifications(prev => prev.filter(n => n.uniqueId !== newNotification.uniqueId));
        }, 6000);

        return [...currentNotifications, newNotification];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <aside className="h-screen w-64 bg-white/10 backdrop-blur-lg border-r border-gray-200 dark:border-gray-700 dark:bg-gray-900/60 text-white sticky top-0 shadow-md flex flex-col">
      {}
      <div onClick={() => navigate('/dashboard')} className="block p-6 text-center border-b border-white/10 cursor-pointer">
        <div className="flex items-center justify-center">
            <ChartPie className="h-8 w-8 text-white" />
            <h2 className="text-2xl font-bold text-white tracking-wide ml-2">Sample</h2>
        </div>
        <p className="text-sm text-gray-300 mt-1">Dashboard</p>
      </div>

      {}
      <nav className="flex flex-col gap-2 px-4 py-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-2 rounded-md font-medium transition-all duration-300 ${
              location.pathname === item.path
                ? 'bg-orange-500 text-white shadow'
                : 'text-gray-300 hover:bg-orange-400/20 hover:text-white'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>

      {}
      <div className="px-4 mt-6">
        <h3 className="px-4 mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">
          Activity
        </h3>
        <div className="relative h-48 flex flex-col-reverse items-center gap-2 overflow-hidden">
          <AnimatePresence>
            {notifications.map((notif, index) => (
              <motion.div
                key={notif.uniqueId}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                transition={{ type: 'spring', stiffness: 150, damping: 20 }}
                className="w-full p-3 bg-white/10 rounded-lg shadow-md flex items-center gap-3"
                style={{
                  position: 'absolute',
                  bottom: `${index * 10}px`,
                  zIndex: index,
                }}
              >
                <span className="text-orange-400 text-xl">{notif.icon}</span>
                <p className="text-xs text-gray-200 truncate">{notif.text}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {}
      <div className="mt-auto px-4 py-6 border-t border-white/10">
        <button className="flex items-center gap-3 text-red-400 hover:text-red-500 transition-all duration-300 w-full px-4 py-2 rounded-md hover:bg-red-500/10">
          <FiLogOut className="text-xl" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;