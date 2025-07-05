import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,
  PieChart, Pie, Cell,
} from 'recharts';
import { FiPlus, FiMail, FiClock, FiUpload } from 'react-icons/fi';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  { label: 'Total Leads', value: 124, prefix: '' },
  { label: 'Deals Closed', value: 350000, prefix: '₹' },
  { label: 'Active Contacts', value: 342, prefix: '' },
  { label: 'Tasks Due Today', value: 7, prefix: '' },
];

const salesData = [
  { month: 'Jan', value: 4000 },
  { month: 'Feb', value: 3000 },
  { month: 'Mar', value: 5000 },
  { month: 'Apr', value: 4500 },
  { month: 'May', value: 7000 },
  { month: 'Jun', value: 6000 },
];

const pieData = [
  { name: 'Website', value: 45 },
  { name: 'Referral', value: 30 },
  { name: 'Email', value: 25 },
];
const COLORS = ['#f97316', '#6366f1', '#10b981'];

const pipeline = ['New', 'Contacted', 'Qualified', 'Closed'];

const recentActivities = [
  'Lead assigned: Reena Das',
  'Deal closed with Jio: ₹40,000',
  'Task completed: Call back Rohit',
  'Meeting scheduled with Aakash',
];

const tasksToday = [
  'Follow up with Mahesh',
  'Email proposal to Aarti',
  'Schedule demo for Infosys',
  'Team meeting at 3 PM',
];

const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning, Alok!';
    if (hour < 18) return 'Good Afternoon, Alok!';
    return 'Good Evening, Alok!';
}

const Dashboard = () => {
  return (
    <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 p-6 sm:p-8 bg-gray-100 min-h-screen"
    >
        <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">{getGreeting()}</h1>
            <p className="text-gray-500 mt-1">Here's your business snapshot.</p>
        </div>
      
      {}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((item, i) => (
          <motion.div 
            key={i} 
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-sm font-medium text-gray-500">{item.label}</h2>
            <div className="text-3xl font-bold text-gray-800 mt-1">
                <CountUp end={item.value} duration={2.5} separator="," prefix={item.prefix} />
            </div>
          </motion.div>
        ))}
      </div>

      {}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Sales Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
              <YAxis stroke="#9ca3af" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '0.5rem' }} />
              <Line type="monotone" dataKey="value" stroke="#f97316" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Lead Sources</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={110} fill="#8884d8" labelLine={false} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                {pieData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Sales Pipeline</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {pipeline.map((stage, i) => (
            <div key={i} className="p-4 bg-gray-50 rounded-lg text-center border border-gray-200">
              <h3 className="text-gray-800 font-semibold">{stage}</h3>
              <p className="text-sm text-gray-500 mt-1">8 deals</p>
            </div>
          ))}
        </div>
      </div>

      {}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Recent Activity</h2>
          <ul className="space-y-3">
            {recentActivities.map((act, idx) => (
              <li key={idx} className="text-gray-600 border-b border-gray-200 pb-2 text-sm">{act}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Today's Tasks</h2>
          <ul className="space-y-3">
            {tasksToday.map((task, idx) => (
              <li key={idx} className="text-gray-600 border-b border-gray-200 pb-2 text-sm">{task}</li>
            ))}
          </ul>
        </div>
      </div>

      {}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <button className="flex items-center justify-center gap-2 px-5 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 transition text-white font-medium shadow-sm hover:shadow-md">
            <FiPlus /> Add Lead
          </button>
          <button className="flex items-center justify-center gap-2 px-5 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 transition text-white font-medium shadow-sm hover:shadow-md">
            <FiMail /> Send Email
          </button>
          <button className="flex items-center justify-center gap-2 px-5 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition text-white font-medium shadow-sm hover:shadow-md">
            <FiClock /> Schedule Task
          </button>
          <button className="flex items-center justify-center gap-2 px-5 py-2 rounded-lg bg-teal-500 hover:bg-teal-600 transition text-white font-medium shadow-sm hover:shadow-md">
            <FiUpload /> Upload File
          </button>
        </div>
      </div>
    </motion.main>
  );
};

export default Dashboard;