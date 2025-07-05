import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiSearch, FiGrid, FiList, FiPlus } from 'react-icons/fi';

const initialContacts = [
    {
        name: 'Priya Sharma',
        role: 'Marketing Head, Innovate LLC',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
        email: 'priya.sharma@innovatellc.com',
        phone: '+91 98765 43210',
    },
    {
        name: 'Rajesh Kumar',
        role: 'CTO, Tech Solutions',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d',
        email: 'rajesh.kumar@techsolutions.com',
        phone: '+91 91234 56789',
    },
    {
        name: 'Anjali Mehta',
        role: 'CEO, Global Inc',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d',
        email: 'anjali.mehta@globalinc.com',
        phone: '+91 99887 76655',
    },
    {
        name: 'Vikram Singh',
        role: 'Sales Director, Acme Corp',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026707d',
        email: 'vikram.singh@acmecorp.com',
        phone: '+91 98765 12345',
    },
    {
        name: 'Sunita Patil',
        role: 'Product Manager, Future Systems',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026708d',
        email: 'sunita.patil@futuresystems.com',
        phone: '+91 91234 98765',
    },
    {
        name: 'Deepak Chopra',
        role: 'Lead Developer, Retail Giant',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026709d',
        email: 'deepak.chopra@retailgiant.com',
        phone: '+91 99887 12345',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

const Contacts = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [view, setView] = useState('grid'); 

    const filteredContacts = useMemo(() =>
        initialContacts.filter(contact =>
            contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.role.toLowerCase().includes(searchTerm.toLowerCase())
        ), [searchTerm]);

    return (
        <main className="flex-1 p-6 sm:p-8 bg-gray-100 min-h-screen">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Contacts</h1>
                    <p className="text-gray-500 mt-1">Manage your contacts efficiently.</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search contacts..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 w-48 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                        />
                    </div>
                    <div className="flex items-center bg-gray-200 rounded-lg p-1">
                        <button onClick={() => setView('grid')} className={`p-2 rounded-md transition ${view === 'grid' ? 'bg-white shadow' : 'text-gray-600'}`}><FiGrid /></button>
                        <button onClick={() => setView('list')} className={`p-2 rounded-md transition ${view === 'list' ? 'bg-white shadow' : 'text-gray-600'}`}><FiList /></button>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 transition text-white font-medium shadow-sm hover:shadow-md">
                        <FiPlus/> Add Contact
                    </button>
                </div>
            </div>

            <motion.div
                layout
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className={view === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col gap-4"}
            >
                <AnimatePresence>
                    {filteredContacts.map((contact, index) => (
                        <motion.div layout key={contact.email} variants={itemVariants} exit={{ opacity: 0, scale: 0.8 }} className={`bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300 ${view === 'grid' ? 'p-6 text-center' : 'p-4 flex items-center gap-4'}`}>
                            <img src={contact.avatar} alt={contact.name} className={`mx-auto mb-4 rounded-full ${view === 'grid' ? 'w-24 h-24' : 'w-16 h-16'}`} />
                            <div className={view === 'grid' ? 'text-center' : 'text-left flex-1'}>
                                <h2 className="text-xl font-bold text-gray-800">{contact.name}</h2>
                                <p className="text-sm text-gray-500 mb-4">{contact.role}</p>
                                <div className={`flex items-center gap-3 text-gray-600 ${view === 'grid' ? 'justify-center' : ''}`}>
                                    <FiMail className="text-orange-500" />
                                    <span className="text-sm">{contact.email}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </main>
    );
};

export default Contacts;
